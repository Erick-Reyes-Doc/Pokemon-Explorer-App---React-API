import type { Pokemon } from "../types"

interface PokemonListProps {
  pokemons: Pokemon[]
  onSelectPokemon: (pokemon: Pokemon) => void
}

const typeColors: Record<string, string> = {
  normal: "bg-gray-300",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-cyan-400",
  fighting: "bg-orange-600",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-indigo-400",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-800",
  ghost: "bg-indigo-700",
  dragon: "bg-indigo-900",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
}

export default function PokemonList({ pokemons, onSelectPokemon }: PokemonListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pokemons.map((pokemon) => {
        
        const primaryType = pokemon.types[0]?.type.name || "normal"
        const bgColor = typeColors[primaryType] || "bg-gray-300"

        return (
          <div
            key={pokemon.id}
            className={`rounded-2xl overflow-hidden shadow-lg cursor-pointer 
            transition-transform duration-300 ease-in-out hover:scale-105 ${bgColor}`}
            onClick={() => onSelectPokemon(pokemon)}
          >
            <div className="bg-white flex justify-center items-center h-40">
              <img
                src={pokemon.sprites.front_default || "/placeholder.svg"}
                alt={pokemon.name || "Pokémon sin nombre"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-white capitalize mb-1">{pokemon.name}</h2>
              <p className="text-gray-900 font-mono text-sm bg-white rounded-full px-2 py-1 inline-block">
                #{pokemon.id.toString().padStart(3, "0")}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
