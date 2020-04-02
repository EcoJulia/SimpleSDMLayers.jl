# WARNING this file is only loaded if GBIF.jl is also active
# This all happens thanks to the Requires.jl package

import Base: getindex
import Base: setindex!
import SimpleSDMLayers: clip

"""
    Base.getindex(p::T, occurrence::GBIF.GBIFRecord) where {T <: SimpleSDMLayer}

Extracts the value of a layer at a given position for a `GBIFRecord`. If the
`GBIFRecord` has no latitude or longitude, this will return `NaN`.
"""
function Base.getindex(p::T, occurrence::GBIF.GBIFRecord) where {T <: SimpleSDMLayer}
   ismissing(occurrence.latitude) && return NaN
   ismissing(occurrence.longitude) && return NaN
   return p[occurrence.longitude, occurrence.latitude]
end

"""
    Base.setindex!(p::T, v, occurrence::GBIFRecord) where {T <: SimpleSDMResponse}

Changes the values of the cell including the point at the requested latitude and
longitude.
"""
function Base.setindex!(p::SimpleSDMResponse{T}, v::T, occurrence::GBIF.GBIFRecord) where {T}
   ismissing(occurrence.latitude) && return nothing
   ismissing(occurrence.longitude) && return nothing
   setindex!(p, v, occurrence.longitude, occurrence.latitude)
end

"""
    clip(p::T, r::GBIF.GBIFRecords)

Returns a clipped version (with a 15% margin) around all occurences in a
GBIFRecords collection.
"""
function SimpleSDMLayers.clip(p::T, r::GBIF.GBIFRecords) where {T <: SimpleSDMLayer}
   occ_latitudes = filter(!ismissing, [r[i].latitude for i in 1:length(r)])
   occ_longitudes = filter(!ismissing, [r[i].longitude for i in 1:length(r)])

   lat_min = minimum(occ_latitudes)
   lat_max = maximum(occ_latitudes)
   lon_min = minimum(occ_longitudes)
   lon_max = maximum(occ_longitudes)

   lat_Δ = lat_max - lat_min
   lon_Δ = lon_max - lon_min

   lon_stride, lat_stride = stride(p)

   scaling = 0.1
   lon_s = scaling*lon_Δ < 5lon_stride ? 5lon_stride : scaling*lon_Δ
   lat_s = scaling*lat_Δ < 5lat_stride ? 5lat_stride : scaling*lat_Δ

   lat_max = min(p.top, lat_s+lat_max)
   lat_min = max(p.bottom, lat_s-lat_min)
   lon_max = min(p.right, lon_s+lon_max)
   lon_min = max(p.left, lon_s-lon_min)

   return p[left=lon_min, right=lon_max, bottom=lat_min, top=lat_max]
end

"""
    Base.getindex(p::T, r::GBIF.GBIFRecords) where {T <: SimpleSDMLayer}

Returns the values of a layer at all occurrences in a `GBIFRecords` collection.
"""
function Base.getindex(p::T, records::GBIF.GBIFRecords) where {T <: SimpleSDMLayer}
   return [p[records[i]] for i in 1:length(records)]
end