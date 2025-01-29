"use client"

import { useState, useEffect } from "react"
import PokemonList from "./components/PokemonList"
import SelectedPokemon from "./components/SelectedPokemon"
import type { Pokemon } from "./types"

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    fetchPokemons()
    loadSelectedPokemon()
  }, [])

  const fetchPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      const data = await response.json()
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon: { url: string }) => {
          const res = await fetch(pokemon.url)
          return res.json()
        }),
      )
      setPokemons(pokemonDetails)
    } catch (error) {
      console.error("Error fetching pokemons:", error)
    }
  }

  const loadSelectedPokemon = () => {
    const savedPokemon = localStorage.getItem("selectedPokemon")
    if (savedPokemon) {
      setSelectedPokemon(JSON.parse(savedPokemon))
    }
  }

  const handleSelectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon)
    localStorage.setItem("selectedPokemon", JSON.stringify(pokemon))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-bold text-yellow-400 mb-8">Pokédex</h1>
      <SelectedPokemon pokemon={selectedPokemon} />
      <PokemonList pokemons={pokemons} onSelectPokemon={handleSelectPokemon} />
    </div>
  )
}
