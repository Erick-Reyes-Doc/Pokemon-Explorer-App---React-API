import type { Pokemon } from "../types"

interface SelectedPokemonProps {
  pokemon: Pokemon | null
}

const typeColors: Record<string, string> = {
  normal: "bg-gray-400 text-gray-900",
  fire: "bg-red-500 text-white",
  water: "bg-blue-500 text-white",
  electric: "bg-yellow-400 text-gray-900",
  grass: "bg-green-500 text-white",
  ice: "bg-cyan-400 text-gray-900",
  fighting: "bg-orange-700 text-white",
  poison: "bg-purple-500 text-white",
  ground: "bg-yellow-600 text-gray-900",
  flying: "bg-indigo-400 text-white",
  psychic: "bg-pink-500 text-white",
  bug: "bg-lime-500 text-gray-900",
  rock: "bg-yellow-800 text-white",
  ghost: "bg-indigo-700 text-white",
  dragon: "bg-indigo-900 text-white",
  dark: "bg-gray-800 text-white",
  steel: "bg-gray-500 text-white",
  fairy: "bg-pink-300 text-gray-900",
}

export default function SelectedPokemon({ pokemon }: SelectedPokemonProps) {
  if (!pokemon) return null

  return (
    <div className="bg-blue-600 rounded-lg p-6 mb-8 flex items-center shadow-md">
      <img
        src={pokemon.sprites.front_default || "/placeholder.svg"}
        alt={pokemon.name || "Pokémon sin nombre"}
        className="w-32 h-32 mr-6 bg-white rounded-full border-4 border-yellow-400"
      />
      <div>
        <h2 className="text-2xl font-bold text-white capitalize mb-2">{pokemon.name}</h2>
        <p className="text-yellow-300 mb-1">ID: #{pokemon.id.toString().padStart(3, "0")}</p>
        <p className="text-yellow-300 mb-1">Height: {(pokemon.height / 10).toFixed(1)} m</p>
        <p className="text-yellow-300 mb-1">Weight: {(pokemon.weight / 10).toFixed(1)} kg</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`px-2 py-1 rounded-full text-sm font-semibold ${
                typeColors[type.type.name] || "bg-gray-400 text-gray-900"
              }`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
