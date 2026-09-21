import React, { useState } from 'react';
import { Filter, RotateCcw, ChevronDown, Check, SlidersHorizontal } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

export interface FilterState {
  // Colleges
  collegeRegion: string;
  collegeType: string;
  collegeDomain: string;
  collegeAccreditation: string;
  collegeNirf: string;

  // Restaurants
  restaurantLocality: string;
  restaurantCuisine: string;
  restaurantPrice: string;
  restaurantDiet: string;
  restaurantType: string;
}

export const initialFilterState: FilterState = {
  collegeRegion: 'all',
  collegeType: 'all',
  collegeDomain: 'all',
  collegeAccreditation: 'all',
  collegeNirf: 'all',

  restaurantLocality: 'all',
  restaurantCuisine: 'all',
  restaurantPrice: 'all',
  restaurantDiet: 'all',
  restaurantType: 'all',
};

interface FilterBarProps {
  category: 'college' | 'restaurant' | 'all';
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  category,
  filters,
  onFilterChange,
  onReset,
  totalCount,
  filteredCount,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isCollege = category === 'college' || category === 'all';
  const isRestaurant = category === 'restaurant' || category === 'all';

  const hasActiveFilters = Object.values(filters).some((v) => v !== 'all');

  const updateFilter = (key: keyof FilterState, value: string) => {
    tactileAudio.playClick();
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-xs p-4 space-y-3 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-zinc-200 flex items-center justify-center">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#4A5CD8]" />
          </div>
          <div>
            <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181B]">
              Refine Evidence Search
            </h3>
            <span className="text-[11px] font-mono-code text-zinc-500">
              Showing {filteredCount} of {totalCount} verified Delhi entities
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={() => {
                tactileAudio.playClick();
                onReset();
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[11px] font-mono-code text-zinc-700 transition-colors"
            >
              <RotateCcw className="w-3 h-3 text-zinc-500" />
              <span>Reset Filters</span>
            </button>
          )}

          <button
            onClick={() => {
              tactileAudio.playClick();
              setIsExpanded(!isExpanded);
            }}
            aria-expanded={isExpanded}
            aria-controls="filter-controls-panel"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#18181B] text-white text-xs font-mono-code hover:bg-zinc-800 transition-all shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5CD8]"
          >
            <Filter className="w-3 h-3" />
            <span>{isExpanded ? 'Hide Filter Controls' : 'Show Filter Controls'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Filter Control Panels */}
      {isExpanded && (
        <div id="filter-controls-panel" className="pt-3 border-t border-zinc-100 space-y-4">
          {/* College Specific Filters */}
          {isCollege && (
            <div className="space-y-3">
              <span className="text-[10px] font-mono-code uppercase font-bold text-[#4A5CD8] tracking-wider block">
                Colleges & Higher Education Filters
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {/* Region */}
                <div className="space-y-1">
                  <label htmlFor="filter-college-region" className="text-[10px] font-mono-code text-zinc-500 font-semibold block">Delhi Region</label>
                  <select
                    id="filter-college-region"
                    value={filters.collegeRegion}
                    onChange={(e) => updateFilter('collegeRegion', e.target.value)}
                    className="w-full text-xs font-mono-code py-1.5 px-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#4A5CD8]"
                  >
                    <option value="all">All Regions</option>
                    <option value="North Delhi">North Delhi / North Campus</option>
                    <option value="South Delhi">South Delhi / South Campus</option>
                    <option value="Central Delhi">Central Delhi</option>
                    <option value="West Delhi">West Delhi (Janakpuri/Raja Garden)</option>
                    <option value="East Delhi">East Delhi & Shahdara</option>
                    <option value="Rohini">North-West Delhi (Rohini/Pitampura)</option>
                    <option value="Dwarka">South-West Delhi (Dwarka)</option>
                  </select>
                </div>

                {/* Institution Type */}
                <div className="space-y-1">
                  <label htmlFor="filter-college-type" className="text-[10px] font-mono-code text-zinc-500 font-semibold block">Institution Type</label>
                  <select
                    id="filter-college-type"
                    value={filters.collegeType}
                    onChange={(e) => updateFilter('collegeType', e.target.value)}
                    className="w-full text-xs font-mono-code py-1.5 px-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#4A5CD8]"
                  >
                    <option value="all">All Types</option>
                    <option value="DU College">Delhi University (DU)</option>
                    <option value="State University">State University (DTU/NSUT/IPU)</option>
                    <option value="Engineering">Engineering / Tech</option>
                    <option value="Medical">Medical / Healthcare</option>
                    <option value="Autonomous">Autonomous / National Importance</option>
                  </select>
                </div>

                {/* Course Domain */}
                <div className="space-y-1">
                  <label htmlFor="filter-college-domain" className="text-[10px] font-mono-code text-zinc-500 font-semibold block">Domain / Stream</label>
                  <select
                    id="filter-college-domain"
                    value={filters.collegeDomain}
                    onChange={(e) => updateFilter('collegeDomain', e.target.value)}
                    className="w-full text-xs font-mono-code py-1.5 px-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#4A5CD8]"
                  >
                    <option value="all">All Streams</option>
                    <option value="commerce">Commerce & Economics</option>
                    <option value="engineering">Engineering & Technology</option>
                    <option value="science">Natural & Applied Sciences</option>
                    <option value="medical">Medical & MBBS</option>
                    <option value="management">Management / BBA / BMS</option>
                    <option value="arts">Arts, Humanities & Media</option>
                  </select>
                </div>

                {/* Accreditation */}
                <div className="space-y-1">
                  <label htmlFor="filter-college-accreditation" className="text-[10px] font-mono-code text-zinc-500 font-semibold block">Accreditation</label>
                  <select
                    id="filter-college-accreditation"
                    value={filters.collegeAccreditation}
                    onChange={(e) => updateFilter('collegeAccreditation', e.target.value)}
                    className="w-full text-xs font-mono-code py-1.5 px-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#4A5CD8]"
                  >
                    <option value="all">All Grades</option>
                    <option value="A++">NAAC A++</option>
                    <option value="A+">NAAC A+</option>
                    <option value="A">NAAC A</option>
                  </select>
                </div>

                {/* NIRF */}
                <div className="space-y-1">
                  <label htmlFor="filter-college-nirf" className="text-[10px] font-mono-code text-zinc-500 font-semibold block">NIRF Rank</label>
                  <select
                    id="filter-college-nirf"
                    value={filters.collegeNirf}
                    onChange={(e) => updateFilter('collegeNirf', e.target.value)}
                    className="w-full text-xs font-mono-code py-1.5 px-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#4A5CD8]"
                  >
                    <option value="all">All Ranks</option>
                    <option value="top10">Top 10 Nationally</option>
                    <option value="top25">Top 25 Nationally</option>
                    <option value="top50">Top 50 Nationally</option>
                    <option value="top100">Top 100 Nationally</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Restaurant Specific Filters */}
          {isRestaurant && (
            <div className="space-y-3 pt-2 border-t border-zinc-100">
              <span className="text-[10px] font-mono-code uppercase font-bold text-emerald-700 tracking-wider block">
                Restaurants, Cafes & Food Establishments Filters
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {/* Locality */}
                <div className="space-y-1">
                  <label htmlFor="filter-restaurant-locality" className="text-[10px] font-mono-code text-zinc-500 font-semibold block">Locality / Market</label>
                  <select
                    id="filter-restaurant-locality"
                    value={filters.restaurantLocality}
                    onChange={(e) => updateFilter('restaurantLocality', e.target.value)}
                    className="w-full text-xs font-mono-code py-1.5 px-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#4A5CD8]"
                  >
                    <option value="all">All Localities</option>
                    <option value="Connaught Place">Connaught Place (CP)</option>
                    <option value="Khan Market">Khan Market</option>
                    <option value="Hauz Khas">Hauz Khas Village / Green Park</option>
                    <option value="Defence Colony">Defence Colony & South Ex</option>
                    <option value="Greater Kailash">Greater Kailash (GK 1 & 2)</option>
                    <option value="Saket">Saket & Vasant Kunj</option>
                    <option value="Lajpat Nagar">Lajpat Nagar & Safdarjung</option>
                    <option value="Old Delhi">Old Delhi (Chandni Chowk / Jama Masjid)</option>
                    <option value="Karol Bagh">Karol Bagh</option>
                    <option value="West Delhi">West Delhi (Rajouri & Punjabi Bagh)</option>
                    <option value="North Campus">North Campus (Hudson Lane)</option>
                    <option value="Rohini">Rohini & Pitampura (NSP)</option>
                    <option value="Dwarka">Dwarka</option>
                  </select>
                </div>

                {/* Cuisine */}
                <div className="space-y-1">
                  <label htmlFor="filter-restaurant-cuisine" className="text-[10px] font-mono-code text-zinc-500 font-semibold block">Cuisine</label>
                  <select
                    id="filter-restaurant-cuisine"
                    value={filters.restaurantCuisine}
                    onChange={(e) => updateFilter('restaurantCuisine', e.target.value)}
                    className="w-full text-xs font-mono-code py-1.5 px-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#4A5CD8]"
                  >
                    <option value="all">All Cuisines</option>
                    <option value="North Indian">North Indian & Mughlai</option>
                    <option value="South Indian">South Indian & Thali</option>
                    <option value="Italian">Italian & Continental</option>
                    <option value="Pan-Asian">Pan-Asian & Burmese</option>
                    <option value="Bakery">Bakery & Desserts</option>
                    <option value="Street Food">Street Food & Chaat</option>
                  </select>
                </div>

                {/* Price Level */}
                <div className="space-y-1">
                  <label htmlFor="filter-restaurant-price" className="text-[10px] font-mono-code text-zinc-500 font-semibold block">Price Tier</label>
                  <select
                    id="filter-restaurant-price"
                    value={filters.restaurantPrice}
                    onChange={(e) => updateFilter('restaurantPrice', e.target.value)}
                    className="w-full text-xs font-mono-code py-1.5 px-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#4A5CD8]"
                  >
                    <option value="all">All Price Tiers</option>
                    <option value="₹">Budget (₹ - Under ₹600 for two)</option>
                    <option value="₹₹">Casual (₹₹ - ₹600 to ₹1,400)</option>
                    <option value="₹₹₹">Premium (₹₹₹ - ₹1,400 to ₹3,000)</option>
                    <option value="₹₹₹₹">Luxury (₹₹₹₹ - ₹3,000+ for two)</option>
                  </select>
                </div>

                {/* Vegetarian / Diet */}
                <div className="space-y-1">
                  <label htmlFor="filter-restaurant-diet" className="text-[10px] font-mono-code text-zinc-500 font-semibold block">Dietary Profile</label>
                  <select
                    id="filter-restaurant-diet"
                    value={filters.restaurantDiet}
                    onChange={(e) => updateFilter('restaurantDiet', e.target.value)}
                    className="w-full text-xs font-mono-code py-1.5 px-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#4A5CD8]"
                  >
                    <option value="all">All Profiles</option>
                    <option value="pure_veg">100% Pure Vegetarian</option>
                    <option value="multi">Multi-Option (Veg & Non-Veg)</option>
                  </select>
                </div>

                {/* Dining Type */}
                <div className="space-y-1">
                  <label htmlFor="filter-restaurant-type" className="text-[10px] font-mono-code text-zinc-500 font-semibold block">Dining Format</label>
                  <select
                    id="filter-restaurant-type"
                    value={filters.restaurantType}
                    onChange={(e) => updateFilter('restaurantType', e.target.value)}
                    className="w-full text-xs font-mono-code py-1.5 px-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#4A5CD8]"
                  >
                    <option value="all">All Formats</option>
                    <option value="Fine Dining">Fine Dining</option>
                    <option value="Casual Dining">Casual Dining</option>
                    <option value="Cafe">Cafe & Bistro</option>
                    <option value="Street Food">Street Food & Quick Bite</option>
                    <option value="Bakery">Bakery & Confectionery</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
