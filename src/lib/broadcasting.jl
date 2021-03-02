import Base.Broadcast: broadcast

"""
   Broadcast.broadcast(f, L::LT) where {LT <: SimpleSDMLayer}

TODO
"""
function Base.Broadcast.broadcast(f, L::LT) where {LT <: SimpleSDMLayer}
    newgrid = Array{Any}(nothing, size(L))
    N = SimpleSDMResponse(newgrid, L)
    v = filter(!isnothing, L.grid)
    fv = f.(v)
    N.grid[findall(!isnothing, L.grid)] .= fv

    internal_types = unique(typeof.(N.grid))

    RT = LT <: SimpleSDMResponse ? SimpleSDMResponse : SimpleSDMPredictor
    return RT(convert(Matrix{Union{internal_types...}}, N.grid), N)
end