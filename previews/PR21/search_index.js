var documenterSearchIndex = {"docs":
[{"location":"man/overloads/#Methods-overloaded","page":"Overloads","title":"Methods overloaded","text":"","category":"section"},{"location":"man/overloads/","page":"Overloads","title":"Overloads","text":"To facilitate writing julian code, we have overloaded a number of methods from Base. These methods should remove the need to interact with the grid field directly, and also allow to set and get values using the geographic coordinates (as opposed to the grid positions).","category":"page"},{"location":"man/overloads/#From-Base","page":"Overloads","title":"From Base","text":"","category":"section"},{"location":"man/overloads/","page":"Overloads","title":"Overloads","text":"convert\ncopy\neltype\nsize\nstride\neachindex\ngetindex\nsetindex!\nsimilar\nBase.sum\nBase.maximum\nBase.minimum","category":"page"},{"location":"man/overloads/#Base.convert","page":"Overloads","title":"Base.convert","text":"Base.convert(::Type{SimpleSDMResponse}, layer::T) where {T <: SimpleSDMPredictor}\n\nReturns a response with the same grid and bounding box as the predictor.\n\n\n\n\n\nBase.convert(::Type{SimpleSDMPredictor}, layer::T) where {T <: SimpleSDMResponse}\n\nReturns a predictor with the same grid and bounding box as the response.\n\n\n\n\n\nBase.convert(::Type{Matrix}, layer::T) where {T <: SimpleSDMLayer}\n\nReturns the grid as an array.\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.copy","page":"Overloads","title":"Base.copy","text":"Base.copy(l::T) where {T <: SimpleSDMLayer}\n\nReturns a new copy of the layer, which has the same type.\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.eltype","page":"Overloads","title":"Base.eltype","text":"Base.eltype(layer::T) where {T <: SimpleSDMLayer}\n\nReturns the type of the values stored in the grid.\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.size","page":"Overloads","title":"Base.size","text":"Base.size(layer::T) where {T <: SimpleSDMLayer}\n\nReturns the size of the grid.\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.stride","page":"Overloads","title":"Base.stride","text":"Base.stride(layer::T; dims::Union{Nothing,Integer}=nothing) where {T <: SimpleSDMLayer}\n\nReturns the stride, i.e. the length, of cell dimensions, possibly alongside a side of the grid.\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.eachindex","page":"Overloads","title":"Base.eachindex","text":"Base.eachindex(layer::T) where {T <: SimpleSDMLayer}\n\nReturns the index of the grid.\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.getindex","page":"Overloads","title":"Base.getindex","text":"Extracts a  value from a layer by its grid position.\n\n\n\n\n\nBase.getindex(layer::T, i::R, j::R) where {T <: SimpleSDMLayer, R <: UnitRange}\n\nExtracts a series of positions in a layer, and returns a layer corresponding to the result. This is essentially a way to rapidly crop a layer to a given subset of its extent. The i and j arguments are UnitRanges (of Integer).\n\nThe layer returned by this function will have the same type as the layer passed as its argument, but this can be changed using convert. Note that this function performs additional checks to ensure that the range is not empty, and to also ensure that it does not overflows from the size of the layer.\n\n\n\n\n\nBase.getindex(layer::T, longitude::K, latitude::K) where {T <: SimpleSDMLayer, K <: AbstractFloat}\n\nExtracts the value of a layer at a given latitude and longitude. If values outside the range are requested, will return NaN.\n\n\n\n\n\nBase.getindex(layer::T; left=nothing, right=nothing, top=nothing, bottom=nothing) where {T <: SimpleSDMLayer, K <: Union{Nothing,AbstractFloat}}\n\nReturns a subset of the argument layer, where the new limits are given by left, right, top, and bottom. Up to three of these can be omitted, and if so these limits will not be affected.\n\n\n\n\n\nBase.getindex(layer::T, n::NT) where {T <: SimpleSDMLayer, NT <: NamedTuple}\n\nReturns a subset of the argument layer, where the new limits are given in a NamedTuple by left, right, top, and bottom, in any order. Up to three of these can be omitted, and if so these limits will not be affected.\n\n\n\n\n\nBase.getindex(layer1::T1, layer2::T2) where {T1 <: SimpleSDMLayer, T2 <: SimpleSDMLayer}\n\nExtract a layer based on a second layer. Note that the two layers must be compatible, which is to say they must have the same bounding box and grid size.\n\n\n\n\n\nBase.getindex(p::T, occurrence::GBIF.GBIFRecord) where {T <: SimpleSDMLayer}\n\nExtracts the value of a layer at a given position for a GBIFRecord. If the GBIFRecord has no latitude or longitude, this will return NaN.\n\n\n\n\n\nBase.getindex(p::T, r::GBIF.GBIFRecords) where {T <: SimpleSDMLayer}\n\nReturns the values of a layer at all occurrences in a GBIFRecords collection.\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.setindex!","page":"Overloads","title":"Base.setindex!","text":" Base.setindex!(layer::SimpleSDMResponse{T}, v::T, i...) where {T}\n\nChanges the value of a cell, or a range of cells, as indicated by their grid positions.\n\n\n\n\n\nBase.setindex!(layer::T, v, lon::Float64, lat::Float64) where {T <: SimpleSDMResponse}\n\nChanges the values of the cell including the point at the requested latitude and longitude.\n\n\n\n\n\nBase.setindex!(p::T, v, occurrence::GBIFRecord) where {T <: SimpleSDMResponse}\n\nChanges the values of the cell including the point at the requested latitude and longitude.\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.similar","page":"Overloads","title":"Base.similar","text":"Base.similar(l::T) where {T <: SimpleSDMLayer}\n\nReturns a SimpleSDMResponse of the same dimensions as the original layer, with nothing in the same positions. The rest of the values are replaced by the output of zero(eltype(layer.grid)), which implies that there must be a way to get a zero for the type. If not, the same result can always be achieved through the use of copy, manual update, and convert.\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.sum","page":"Overloads","title":"Base.sum","text":"Base.sum(l::SimpleSDMResponse{T}) where {T <: Number}\n\nApplies sum (from Base) to an object of type SimpleSDMResponse. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\nBase.sum(l::SimpleSDMPredictor{T}) where {T <: Number}\n\nApplies sum (from Base) to an object of type SimpleSDMPredictor. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.maximum","page":"Overloads","title":"Base.maximum","text":"Base.maximum(l::SimpleSDMResponse{T}) where {T <: Number}\n\nApplies maximum (from Base) to an object of type SimpleSDMResponse. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\nBase.maximum(l::SimpleSDMPredictor{T}) where {T <: Number}\n\nApplies maximum (from Base) to an object of type SimpleSDMPredictor. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Base.minimum","page":"Overloads","title":"Base.minimum","text":"Base.minimum(l::SimpleSDMResponse{T}) where {T <: Number}\n\nApplies minimum (from Base) to an object of type SimpleSDMResponse. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\nBase.minimum(l::SimpleSDMPredictor{T}) where {T <: Number}\n\nApplies minimum (from Base) to an object of type SimpleSDMPredictor. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#From-Broadcast","page":"Overloads","title":"From Broadcast","text":"","category":"section"},{"location":"man/overloads/","page":"Overloads","title":"Overloads","text":"broadcast","category":"page"},{"location":"man/overloads/#Base.Broadcast.broadcast","page":"Overloads","title":"Base.Broadcast.broadcast","text":"Broadcast.broadcast(f, L::LT) where {LT <: SimpleSDMLayer}\n\nTODO\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#From-Statistics","page":"Overloads","title":"From Statistics","text":"","category":"section"},{"location":"man/overloads/","page":"Overloads","title":"Overloads","text":"Statistics.mean\nStatistics.median\nStatistics.std","category":"page"},{"location":"man/overloads/#Statistics.mean","page":"Overloads","title":"Statistics.mean","text":"Statistics.mean(l::SimpleSDMResponse{T}) where {T <: Number}\n\nApplies mean (from Statistics) to an object of type SimpleSDMResponse. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\nStatistics.mean(l::SimpleSDMPredictor{T}) where {T <: Number}\n\nApplies mean (from Statistics) to an object of type SimpleSDMPredictor. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Statistics.median","page":"Overloads","title":"Statistics.median","text":"Statistics.median(l::SimpleSDMResponse{T}) where {T <: Number}\n\nApplies median (from Statistics) to an object of type SimpleSDMResponse. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\nStatistics.median(l::SimpleSDMPredictor{T}) where {T <: Number}\n\nApplies median (from Statistics) to an object of type SimpleSDMPredictor. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\n","category":"function"},{"location":"man/overloads/#Statistics.std","page":"Overloads","title":"Statistics.std","text":"Statistics.std(l::SimpleSDMResponse{T}) where {T <: Number}\n\nApplies std (from Statistics) to an object of type SimpleSDMResponse. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\nStatistics.std(l::SimpleSDMPredictor{T}) where {T <: Number}\n\nApplies std (from Statistics) to an object of type SimpleSDMPredictor. This function has been automatically generated. Note that this function is only applied to the non-nothing elements of the layer, and has no method to work on the dims keyword; the grid itself can be extracted with convert(Matrix, l).\n\n\n\n\n\n","category":"function"},{"location":"man/plotting/#Plotting","page":"Plotting","title":"Plotting","text":"","category":"section"},{"location":"man/plotting/","page":"Plotting","title":"Plotting","text":"Plotting currently supports (through Plots and StatsPlots) heatmap and contour (for the values of a single layer), density and histogram (for the non-NaN values), as well as scatter and histogram2d for two layers. All usual options for plots apply. There are numerous illustrations of the plotting functions in the examples.","category":"page"},{"location":"man/types/#Types","page":"Types","title":"Types","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"Layers are represented by a grid, storing the content of cells in a Matrix, and a bounding box indicated by the floating point coordinates of its limits.","category":"page"},{"location":"man/types/#Implemented-types","page":"Types","title":"Implemented types","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"SimpleSDMResponse\nSimpleSDMPredictor","category":"page"},{"location":"man/types/#SimpleSDMLayers.SimpleSDMResponse","page":"Types","title":"SimpleSDMLayers.SimpleSDMResponse","text":"A response is a SimpleSDMLayer that is mutable, and is the usual type to store analysis outputs. You can transform a response into a predictor using convert.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#SimpleSDMLayers.SimpleSDMPredictor","page":"Types","title":"SimpleSDMLayers.SimpleSDMPredictor","text":"A predictor is a SimpleSDMLayer that is immutable, and so does not have methods for setindex!, etc. It is a safe way to store values that should not be modified by the analysis. Note that if you are in a bind, the values of the grid field are not immutable, but don't tell anyone we told you. The correct way of handling predictors you need to modify would be to use convert methods.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#Abstract-type","page":"Types","title":"Abstract type","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"SimpleSDMLayer","category":"page"},{"location":"man/types/#SimpleSDMLayers.SimpleSDMLayer","page":"Types","title":"SimpleSDMLayers.SimpleSDMLayer","text":"All types in the package are part of the abstract type SimpleSDMLayer. A SimpleSDMLayer has five core fields: grid is a matrix storing the cells, and left, right, bottom and top are floating point numbers specifying the bounding box.\n\nIt is assumed that the missing values will be represented as nothing, so internally the matrix will have type Union{T, Nothing}.\n\n\n\n\n\n","category":"type"},{"location":"examples/temperature/#Getting-temperature-data","page":"Temperature data","title":"Getting temperature data","text":"","category":"section"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"In this example, we will look at temperature data from the worldclim 2 data, crop it for Western Europe, and then change the resolution to aggregate the data. The first step is to get the worldclim layer for temperature (the codes for each layers are in the function documentation):","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"using SimpleSDMLayers\ntemperature = worldclim(1)","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"Thanks to the integration with Plots and StatsPlots, we can very rapidly visualize these data:","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"using Plots, StatsPlots\nheatmap(temperature, c=:cividis, frame=:box)\nxaxis!(\"Longitude\")\nyaxis!(\"Latitude\")","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"Let's also have a look at the density while we're at it:","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"density(temperature, frame=:zerolines, c=:grey, fill=(0, :grey, 0.5), leg=false)\nxaxis!(\"Temperature\", (-50,30))","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"The next step is to clip the data to the region of interest. This requires a the coordinates of the bounding box as two tuples (for longitude and latitude) – we can also make a quick heatmap to see what the region looks like:","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"temperature_europe = temperature[left=-11.0, right=31.1, bottom=29.0, top=71.1]\nheatmap(temperature_europe, c=:cividis, aspectratio=1, frame=:box)","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"The next step will be to coarsen these data, which requires to give the number of cells to merge alongside each dimension. This number of cells must be a divider of the grid size, which we can view with:","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"size(temperature_europe)","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"In an ideal world, we could want to find a number of cells that is the same both for latitude and longitude, and one approach is to finagle our way into a correct grid by changing the clipping region.","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"In this case, we will use a coarsening scale of (2,2), which gives us a total of 4 cells in the aggregated result. Our aggregation function will be mean (so we report the average temperature across these cells):","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"import Statistics\ntemperature_europe_coarse = coarsen(temperature_europe, Statistics.mean, (2, 2))","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"One again, we can plot these data:","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"heatmap(temperature_europe_coarse, aspectratio=1, c=:cividis, frame=:box)","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"Finally, we can compare our different clipping and approximations to the overall dataset:","category":"page"},{"location":"examples/temperature/","page":"Temperature data","title":"Temperature data","text":"density(temperature, frame=:zerolines, c=:grey, fill=(0, :grey, 0.5), lab=\"\")\ndensity!(temperature_europe, c=:black, lab=\"Raw data\")\ndensity!(temperature_europe_coarse, c=:darkgrey, lab=\"Average\")\nxaxis!(\"Temperature\", (-50,30))","category":"page"},{"location":"examples/gbif/#Working-with-GBIF-data","page":"GBIF integration","title":"Working with GBIF data","text":"","category":"section"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"In this example, we will see how we can make the packages SimpleSDMLayers and the GBIF.jl package interact. We will specifically plot the relationship between temperature and precipitation for a few occurrences of the kingfisher Megaceryle alcyon.","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"using SimpleSDMLayers\nusing GBIF\nusing Plots\nusing StatsPlots\ntemperature = worldclim(1)\nprecipitation = worldclim(12)","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"We can get some occurrences for the taxon of interest:","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"kingfisher = GBIF.taxon(\"Megaceryle alcyon\", strict=true)\nkf_occurrences = occurrences(kingfisher)\n\n# We will get some more occurrences\nfor i in 1:9\n  occurrences!(kf_occurrences)\nend\n\nfilter!(GBIF.have_ok_coordinates, kf_occurrences)\n@info kf_occurrences","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"We can then extract the temperature for the first occurrence:","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"temperature[kf_occurrences[1]]","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"Of course, it would be unwieldy to do this for every occurrence in our dataset, and so we will see a way do it much faster. But first, we do not need the entire surface of the planet to perform our analysis, and so we will instead clip the layers:","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"temperature_clip = clip(temperature, kf_occurrences)\nprecipitation_clip = clip(precipitation, kf_occurrences)","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"This will make the future queries a little faster. By default, the clip function will ad a 5% margin on every side. To get the values of a layer at every occurrence in a GBIFRecord, we simply pass the records as a position:","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"histogram2d(temperature_clip, precipitation_clip, c=:viridis)\nscatter!(temperature_clip[kf_occurrences], precipitation_clip[kf_occurrences], lab=\"\", c=:white, msc=:orange)","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"This will return a record of all data for all geo-localized occurrences (i.e. neither the latitude nor the longitude is missing) in a GBIFRecords collection, as an array of the eltype of the layer.","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"We can also plot the records over space, using the overloads of the latitudes and longitudes functions:","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"contour(precipitation_clip, c=:YlGnBu, title=\"Precipitation\", frame=:box, fill=true)\nscatter!(longitudes(kf_occurrences), latitudes(kf_occurrences), lab=\"\", c=:white, msc=:orange)","category":"page"},{"location":"examples/gbif/","page":"GBIF integration","title":"GBIF integration","text":"These extensions of SimpleSDMLayers functions to work with the GBIF package are meant to greatly simplify the expression of more complex pipelines, notably for actual species distribution modeling.","category":"page"},{"location":"man/operations/#Other-operations","page":"Other operations","title":"Other operations","text":"","category":"section"},{"location":"man/operations/","page":"Other operations","title":"Other operations","text":"coarsen\nslidingwindow\nlatitudes\nlongitudes\nclip","category":"page"},{"location":"man/operations/#SimpleSDMLayers.coarsen","page":"Other operations","title":"SimpleSDMLayers.coarsen","text":"coarsen(L::LT, f::FT, d::Tuple{IT,IT}) where {LT <: SimpleSDMLayer, FT <: Function, IT <: Integer}\n\nThis function will aggregate a layer by merging cells. The function f passed as its second argument is expected to take an array as input, and return a single value of any type (but it is sort of a social contract here that this will be a number of some sort, and if it is not, that you really know what you're doing).\n\nThe size of the cells to aggregate is given by the tuple, so that (2,2) will make groups of two cells vertically and two cells horizontally, for a total of four cells. By default, the cells containing nothing will be ignored, so that f is only applied to non-nothing values.\n\nIn cases where the number of cells to aggregate is not matching with the size of the grid, and ArgumentError will be thrown. Note that there is no expectation that the two values in d will be the same.\n\n\n\n\n\n","category":"function"},{"location":"man/operations/#SimpleSDMLayers.slidingwindow","page":"Other operations","title":"SimpleSDMLayers.slidingwindow","text":"slidingwindow(L::LT, f::FT, d::IT) where {LT <: SimpleSDMLayer, FT <: Function, IT <: Number}\n\nThis function will replace the value at any cell by applying the function f to the array of cells values that are within a distance d (in kilometers) from the focal cell. This is, for example, useful to use an average to smooth out the layers. The distance is estimated using the haversine distance, assuming that the radius of the Earth is 6371.0 km. This means that the size of the window will vary a little bit across latitudes, but this is far better than using a number of cells, which would have dramatic consequences near the poles.\n\nIt always returns a SimpleSDMResponse, and the cells containing nothing will also not contain a value in the output. This is different from the behavior of coarsen, which tends to expand the area of the layer in which we have data.\n\nThis function is currently relatively slow. Performance improvements will arrive at some point.\n\n\n\n\n\n","category":"function"},{"location":"man/operations/#SimpleSDMLayers.latitudes","page":"Other operations","title":"SimpleSDMLayers.latitudes","text":"latitudes(layer::T) where {T <: SimpleSDMLayer}\n\nReturns an iterator with the latitudes of the SDM layer passed as its argument. This returns the latitude at the center of each cell in the grid.\n\n\n\n\n\nSimpleSDMLayers.latitudes(records::GBIFRecords)\n\nReturns the non-missing latitudes.\n\n\n\n\n\n","category":"function"},{"location":"man/operations/#SimpleSDMLayers.longitudes","page":"Other operations","title":"SimpleSDMLayers.longitudes","text":"longitudes(layer::T) where {T <: SimpleSDMLayer}\n\nReturns an iterator with the longitudes of the SDM layer passed as its argument. This returns the longitudes at the center of each cell in the grid.\n\n\n\n\n\nSimpleSDMLayers.longitudes(records::GBIFRecords)\n\nReturns the non-missing longitudes.\n\n\n\n\n\n","category":"function"},{"location":"man/operations/#SimpleSDMLayers.clip","page":"Other operations","title":"SimpleSDMLayers.clip","text":"clip(p::T, r::GBIF.GBIFRecords)\n\nReturns a clipped version (with a 10% margin) around all occurences in a GBIFRecords collection.\n\n\n\n\n\n","category":"function"},{"location":"#Simple-SDM-Layers-in-*Julia*","page":"Home","title":"Simple SDM Layers in Julia","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The SimpleSDMLayers provides an interface to facilitate the manipulation of raster data for species distributions modeling in Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The two core types of the package are SimpleSDMPredictor and SimpleSDMResponse. The only difference between the two is that predictors are immutable, but responses are. All types belong to the abstract SimpleSDMLayer, and are organised in the same way: a grid field storing a matrix of data (of any type!), and the left, right, bottom, and top coordinates (as floating point values).","category":"page"},{"location":"","page":"Home","title":"Home","text":"Of course these details are largely irrelevant, since we have overloaded a large number of methods from Base, to make indexing, converting, and modifying data as easy as possible.","category":"page"},{"location":"examples/landcover/#Getting-landcover-data","page":"Landcover","title":"Getting landcover data","text":"","category":"section"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"In this example, we will look at landcover data for the proportion of urban/built area around Montréal; this dataset is very large to fit in memory, so we will take advantage of the ability to only load the part that matters by passing the limits of a bounding box.","category":"page"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"using SimpleSDMLayers\nurban = landcover(9; left=-74.0, right=-72.0, top=47.0, bottom=44.0)","category":"page"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"This dataset is returning data as UInt8 (as it represents a proportion of the pixel), but this is not something that can be plotted efficiently. So in the next step, we will manipulate this object a little bit to have something more workable.","category":"page"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"Let's start by preparing a new grid, with the same dimensions, but a friendlier type:","category":"page"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"n_urban_grid = zeros(Float32, size(urban));","category":"page"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"We can then fill these values using a simple rule:","category":"page"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"for (i,e) in enumerate(urban.grid)\n  n_urban_grid[i] = isnothing(e) ? NaN : float32(e)\nend","category":"page"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"And now we can rewrite our urban object as","category":"page"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"urban = SimpleSDMPredictor(n_urban_grid, urban)","category":"page"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"Note that this uses a shortcut where the bounding box from a new SimpleSDMLayer is drawn from the bounding box for a previous one.","category":"page"},{"location":"examples/landcover/","page":"Landcover","title":"Landcover","text":"using Plots\nhistogram(urban)","category":"page"},{"location":"man/data/#Datasets","page":"Data","title":"Datasets","text":"","category":"section"},{"location":"man/data/","page":"Data","title":"Data","text":"The package offers access to bioclimatic and other datasets - they are downloaded, saved to the disk, and then read locally. Please note that some of them require a lot of memory, so make sure your machine can handle them.","category":"page"},{"location":"man/data/#Worldclim-2.1","page":"Data","title":"Worldclim 2.1","text":"","category":"section"},{"location":"man/data/","page":"Data","title":"Data","text":"worldclim","category":"page"},{"location":"man/data/#SimpleSDMLayers.worldclim","page":"Data","title":"SimpleSDMLayers.worldclim","text":"worldclim(layers::Vector{T}; resolution::AbstractString=\"10\", path::AbstractString=\"assets\") where {T <: Integer}\n\nDownload and prepare WorldClim 2.1 bioclimatic variables, and returns them as an array of SimpleSDMPredictors. Layers are called by their number, from 1 to 19. The list of available layers is given in a table below.\n\nThe two keywords are resolution, which must be a string, and either 2.5, 5, or 10; and path, which refers to the path where the function will look for the zip and geotiff files.\n\nInternally, this function will download the main zip file for the required resolution from the WordlClim website, extract it, and parse the required layers.\n\nIt is recommended to keep the content of the path folder, as it will eliminate the need to download and/or extract the tiff files. For example, calling wordlclim(1:19) will download and extract everything, and future calls will be much faster.\n\nVariable Description\n1 Annual Mean Temperature\n2 Mean Diurnal Range (Mean of monthly (max temp - min temp))\n3 Isothermality (BIO2/BIO7) (* 100)\n4 Temperature Seasonality (standard deviation *100)\n5 Max Temperature of Warmest Month\n6 Min Temperature of Coldest Month\n7 Temperature Annual Range (BIO5-BIO6)\n8 Mean Temperature of Wettest Quarter\n9 Mean Temperature of Driest Quarter\n10 Mean Temperature of Warmest Quarter\n11 Mean Temperature of Coldest Quarter\n12 Annual Precipitation\n13 Precipitation of Wettest Month\n14 Precipitation of Driest Month\n15 Precipitation Seasonality (Coefficient of Variation)\n16 Precipitation of Wettest Quarter\n17 Precipitation of Driest Quarter\n18 Precipitation of Warmest Quarter\n19 Precipitation of Coldest Quarter\n\nOriginal data: https://www.worldclim.org/data/worldclim21.html\n\n\n\n\n\nworldclim(layer::T; x...) where {T <: Integer}\n\nReturn a single layer from WorldClim 2.1.\n\n\n\n\n\nworldclim(layers::UnitRange{T}; x...) where {T <: Integer}\n\nReturn a range of layers from WorldClim 2.1.\n\n\n\n\n\n","category":"function"},{"location":"man/data/#CHELSA-V1","page":"Data","title":"CHELSA V1","text":"","category":"section"},{"location":"man/data/","page":"Data","title":"Data","text":"bioclim","category":"page"},{"location":"man/data/#SimpleSDMLayers.bioclim","page":"Data","title":"SimpleSDMLayers.bioclim","text":"Download and prepare bioclim layers from the CHELSA database, and returns them as an array of SimpleSDMPredictors. Layers are called by their number, from 1 to 19. The list of available layers is given in a table below.\n\nThe keyword argument is path, which refers to the path where the function will look for the geotiff files.\n\nNote that these files are large due the fine resolution of the data, and for this reason this function will return the integer version of the layers. Also note that the bioclim data are only available for the V1 of CHELSA, and are not from the V2.\n\nIt is recommended to keep the content of the path folder, as it will eliminate the need to download the tiff files (which are quite large). For example, calling bioclim(1:19) will download and everything, and future calls will be much faster.\n\nVariable Description\n1 Annual Mean Temperature\n2 Mean Diurnal Range (Mean of monthly (max temp - min temp))\n3 Isothermality (BIO2/BIO7) (* 100)\n4 Temperature Seasonality (standard deviation *100)\n5 Max Temperature of Warmest Month\n6 Min Temperature of Coldest Month\n7 Temperature Annual Range (BIO5-BIO6)\n8 Mean Temperature of Wettest Quarter\n9 Mean Temperature of Driest Quarter\n10 Mean Temperature of Warmest Quarter\n11 Mean Temperature of Coldest Quarter\n12 Annual Precipitation\n13 Precipitation of Wettest Month\n14 Precipitation of Driest Month\n15 Precipitation Seasonality (Coefficient of Variation)\n16 Precipitation of Wettest Quarter\n17 Precipitation of Driest Quarter\n18 Precipitation of Warmest Quarter\n19 Precipitation of Coldest Quarter\n\n\n\n\n\nReturn a single layer of bioclim variables from the CHELSA database.\n\n\n\n\n\n","category":"function"},{"location":"man/data/#EarthEnv-landcover","page":"Data","title":"EarthEnv landcover","text":"","category":"section"},{"location":"man/data/","page":"Data","title":"Data","text":"landcover","category":"page"},{"location":"man/data/#SimpleSDMLayers.landcover","page":"Data","title":"SimpleSDMLayers.landcover","text":"landcover(layers::Vector{T}; full::Bool=false, path::AbstractString=\"assets\") where {T <: Integer}\n\nDownload and prepare the EarthEnv consensus landcover data, and returns them as an array of SimpleSDMPredictors. Layers are called by their number, from 1 to\n\nThe list of available layers is given in a table below. The raw data come\n\nfrom https://www.earthenv.org/landcover.\n\nTHe full keyword indicates whether the DISCover information must be included. Quoting from the reference website:\n\nAlthough DISCover is based on older remote sensing imagery (1992-1993), it contains some complementary information which is useful for capturing sub-pixel land cover heterogeneity (please see the associated article for details). Therefore, it is recommended to use the full version of the consensus land cover dataset for most applications. However, the reduced version may provide an alternative for applications in regions with large land cover change in the past two decades.\n\nIt is recommended to keep the content of the path folder, as it will eliminate the need to download and/or extract the tiff files. For example, calling landcover(1:12) will download and extract everything, and future calls will be much faster. Please keep in mind that the layers can be quite large, so keeping the models stored is particularly important.\n\nVariable Description\n1 Evergreen/Deciduous Needleleaf Trees\n2 Evergreen Broadleaf Trees\n3 Deciduous Broadleaf Trees\n4 Mixed/Other Trees\n5 Shrubs\n6 Herbaceous Vegetation\n7 Cultivated and Managed Vegetation\n8 Regularly Flooded Vegetation\n9 Urban/Built-up\n10 Snow/Ice\n11 Barren\n12 Open Water\n\nThese data are released under a CC-BY-NC license to Tuanmu & Jetz.\n\n\n\n\n\nlandcover(layer::T; x...) where {T <: Integer}\n\nThis function returns a single layer from the EarthEnv landcover dataset. Because the layers are quite large due to their resolution (and despite being represented as UInt8), it is a good idea to rely on this function first and foremost. Calling the method with a range or array can lead to an OutOfMemory() error, notably on machines with limited specifications.\n\n\n\n\n\nlandcover(layers::UnitRange{T}; x...) where {T <: Integer}\n\nReturn a range of layers from EarthEnv landcover.\n\n\n\n\n\n","category":"function"}]
}
