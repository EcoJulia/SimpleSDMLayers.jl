
"""
    SimpleSDMPredictor(::Type{EarthEnv}, ::Type{LandCover}, layer::Integer=1; full::Bool=false, kwargs...)

Download and prepare the EarthEnv consensus landcover data, and returns them as
an array of `SimpleSDMPredictor`s. Layers are called by their number, from 1 to
19. The list of available layers is given in a table below. The raw data come
from https://www.earthenv.org/landcover.

THe `full` keyword indicates whether the *DISCover* information must be
included. Quoting from the reference website:

> Although DISCover is based on older remote sensing imagery (1992-1993), it
> contains some complementary information which is useful for capturing
> sub-pixel land cover heterogeneity (please see the associated article for
> details). Therefore, it is recommended to use the full version of the
> consensus land cover dataset for most applications. However, the reduced
> version may provide an alternative for applications in regions with large land
> cover change in the past two decades.

It is recommended to *keep* the content of the `path` folder, as it will
eliminate the need to download and/or extract the tiff files. For example,
calling `landcover(1:12)` will download and extract everything, and future calls
will be much faster. Please keep in mind that the layers can be quite large, so
keeping the models stored is particularly important.

| Variable |             Description              |
| -------- | ------------------------------------ |
| 1        | Evergreen/Deciduous Needleleaf Trees |
| 2        | Evergreen Broadleaf Trees            |
| 3        | Deciduous Broadleaf Trees            |
| 4        | Mixed/Other Trees                    |
| 5        | Shrubs                               |
| 6        | Herbaceous Vegetation                |
| 7        | Cultivated and Managed Vegetation    |
| 8        | Regularly Flooded Vegetation         |
| 9        | Urban/Built-up                       |
| 10       | Snow/Ice                             |
| 11       | Barren                               |
| 12       | Open Water                           |

These data are released under a CC-BY-NC license to Tuanmu & Jetz.
"""
function SimpleSDMPredictor(::Type{EarthEnv}, ::Type{LandCover}, layer::Integer=1; full::Bool=false, kwargs...)
    file = _get_raster(EarthEnv, LandCover, layer, full)
    return geotiff(SimpleSDMPredictor, file; kwargs...)
end

function SimpleSDMPredictor(::Type{EarthEnv}, ::Type{LandCover}, layers::AbstractArray; kwargs...)
    @assert eltype(layers) <: Integer
    return [SimpleSDMPredictor(EarthEnv, LandCover, l; kwargs...) for l in layers]
end
