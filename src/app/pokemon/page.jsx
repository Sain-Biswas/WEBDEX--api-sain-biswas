import SingleCard from "./SingleCard";


const Pokemon = () => {
    return (
        <>
            <div className='h-10'>Pokemon</div>
            <div className="sm:flex sm:flex-wrap sm:justify-evenly">
                {pokemonData.map(element => < SingleCard key={element.id} id={element.id} name={element.name} types={element.types} />)}
            </div>
        </>
    )
}

export default Pokemon

const pokemonData = [
    {
        "id": 1,
        "name": "Bulbasaur ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 2,
        "name": "Ivysaur ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 3,
        "name": "Venusaur ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 4,
        "name": "Charmander ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 5,
        "name": "Charmeleon ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 6,
        "name": "Charizard ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 7,
        "name": "Squirtle ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 8,
        "name": "Wartortle ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 9,
        "name": "Blastoise ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 10,
        "name": "Caterpie ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 11,
        "name": "Metapod ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 12,
        "name": "Butterfree ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 13,
        "name": "Weedle ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 14,
        "name": "Kakuna ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 15,
        "name": "Beedrill ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 16,
        "name": "Pidgey ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 17,
        "name": "Pidgeotto ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 18,
        "name": "Pidgeot ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 19,
        "name": "Rattata ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 20,
        "name": "Raticate ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 21,
        "name": "Spearow ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 22,
        "name": "Fearow ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 23,
        "name": "Ekans ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 24,
        "name": "Arbok ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 25,
        "name": "Pikachu ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 26,
        "name": "Raichu ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 27,
        "name": "Sandshrew ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 28,
        "name": "Sandslash ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 29,
        "name": "Nidoran F ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 30,
        "name": "Nidorina ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 31,
        "name": "Nidoqueen ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 32,
        "name": "Nidoran M ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 33,
        "name": "Nidorino ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 34,
        "name": "Nidoking ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 35,
        "name": "Clefairy ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 36,
        "name": "Clefable ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 37,
        "name": "Vulpix ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 38,
        "name": "Ninetales ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 39,
        "name": "Jigglypuff ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 40,
        "name": "Wigglytuff ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 41,
        "name": "Zubat ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 42,
        "name": "Golbat ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 43,
        "name": "Oddish ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 44,
        "name": "Gloom ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 45,
        "name": "Vileplume ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 46,
        "name": "Paras ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 47,
        "name": "Parasect ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 48,
        "name": "Venonat ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 49,
        "name": "Venomoth ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 50,
        "name": "Diglett ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 51,
        "name": "Dugtrio ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 52,
        "name": "Meowth ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 53,
        "name": "Persian ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 54,
        "name": "Psyduck ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 55,
        "name": "Golduck ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 56,
        "name": "Mankey ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 57,
        "name": "Primeape ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 58,
        "name": "Growlithe ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 59,
        "name": "Arcanine ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 60,
        "name": "Poliwag ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 61,
        "name": "Poliwhirl ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 62,
        "name": "Poliwrath ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 63,
        "name": "Abra ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 64,
        "name": "Kadabra ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 65,
        "name": "Alakazam ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 66,
        "name": "Machop ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 67,
        "name": "Machoke ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 68,
        "name": "Machamp ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 69,
        "name": "Bellsprout ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 70,
        "name": "Weepinbell ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 71,
        "name": "Victreebel ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 72,
        "name": "Tentacool ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 73,
        "name": "Tentacruel ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 74,
        "name": "Geodude ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 75,
        "name": "Graveler ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 76,
        "name": "Golem ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 77,
        "name": "Ponyta ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 78,
        "name": "Rapidash ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 79,
        "name": "Slowpoke ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 80,
        "name": "Slowbro ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 81,
        "name": "Magnemite ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 82,
        "name": "Magneton ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 83,
        "name": "Farfetchd ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 84,
        "name": "Doduo ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 85,
        "name": "Dodrio ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 86,
        "name": "Seel ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 87,
        "name": "Dewgong ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 88,
        "name": "Grimer ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 89,
        "name": "Muk ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 90,
        "name": "Shellder ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 91,
        "name": "Cloyster ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 92,
        "name": "Gastly ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 93,
        "name": "Haunter ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 94,
        "name": "Gengar ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 95,
        "name": "Onix ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 96,
        "name": "Drowzee ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 97,
        "name": "Hypno ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 98,
        "name": "Krabby ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 99,
        "name": "Kingler ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 100,
        "name": "Voltorb ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 101,
        "name": "Electrode ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 102,
        "name": "Exeggcute ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 103,
        "name": "Exeggutor ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 104,
        "name": "Cubone ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 105,
        "name": "Marowak ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 106,
        "name": "Hitmonlee ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 107,
        "name": "Hitmonchan ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 108,
        "name": "Lickitung ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 109,
        "name": "Koffing ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 110,
        "name": "Weezing ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 111,
        "name": "Rhyhorn ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 112,
        "name": "Rhydon ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 113,
        "name": "Chansey ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 114,
        "name": "Tangela ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 115,
        "name": "Kangaskhan ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 116,
        "name": "Horsea ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 117,
        "name": "Seadra ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 118,
        "name": "Goldeen ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 119,
        "name": "Seaking ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 120,
        "name": "Staryu ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 121,
        "name": "Starmie ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 122,
        "name": "Mr Mime ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 123,
        "name": "Scyther ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 124,
        "name": "Jynx ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 125,
        "name": "Electabuzz ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 126,
        "name": "Magmar ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 127,
        "name": "Pinsir ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 128,
        "name": "Tauros ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 129,
        "name": "Magikarp ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 130,
        "name": "Gyarados ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 131,
        "name": "Lapras ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 132,
        "name": "Ditto ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 133,
        "name": "Eevee ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 134,
        "name": "Vaporeon ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 135,
        "name": "Jolteon ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 136,
        "name": "Flareon ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 137,
        "name": "Porygon ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 138,
        "name": "Omanyte ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 139,
        "name": "Omastar ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 140,
        "name": "Kabuto ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 141,
        "name": "Kabutops ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 142,
        "name": "Aerodactyl ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 143,
        "name": "Snorlax ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 144,
        "name": "Articuno ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 145,
        "name": "Zapdos ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 146,
        "name": "Moltres ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 147,
        "name": "Dratini ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 148,
        "name": "Dragonair ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 149,
        "name": "Dragonite ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 150,
        "name": "Mewtwo ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 151,
        "name": "Mew ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 152,
        "name": "Chikorita ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 153,
        "name": "Bayleef ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 154,
        "name": "Meganium ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 155,
        "name": "Cyndaquil ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 156,
        "name": "Quilava ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 157,
        "name": "Typhlosion ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 158,
        "name": "Totodile ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 159,
        "name": "Croconaw ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 160,
        "name": "Feraligatr ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 161,
        "name": "Sentret ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 162,
        "name": "Furret ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 163,
        "name": "Hoothoot ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 164,
        "name": "Noctowl ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 165,
        "name": "Ledyba ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 166,
        "name": "Ledian ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 167,
        "name": "Spinarak ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 168,
        "name": "Ariados ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 169,
        "name": "Crobat ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 170,
        "name": "Chinchou ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 171,
        "name": "Lanturn ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 172,
        "name": "Pichu ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 173,
        "name": "Cleffa ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 174,
        "name": "Igglybuff ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 175,
        "name": "Togepi ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 176,
        "name": "Togetic ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 177,
        "name": "Natu ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 178,
        "name": "Xatu ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 179,
        "name": "Mareep ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 180,
        "name": "Flaaffy ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 181,
        "name": "Ampharos ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 182,
        "name": "Bellossom ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 183,
        "name": "Marill ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 184,
        "name": "Azumarill ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 185,
        "name": "Sudowoodo ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 186,
        "name": "Politoed ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 187,
        "name": "Hoppip ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 188,
        "name": "Skiploom ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 189,
        "name": "Jumpluff ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 190,
        "name": "Aipom ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 191,
        "name": "Sunkern ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 192,
        "name": "Sunflora ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 193,
        "name": "Yanma ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 194,
        "name": "Wooper ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 195,
        "name": "Quagsire ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 196,
        "name": "Espeon ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 197,
        "name": "Umbreon ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 198,
        "name": "Murkrow ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 199,
        "name": "Slowking ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 200,
        "name": "Misdreavus ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 201,
        "name": "Unown ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 202,
        "name": "Wobbuffet ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 203,
        "name": "Girafarig ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 204,
        "name": "Pineco ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 205,
        "name": "Forretress ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 206,
        "name": "Dunsparce ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 207,
        "name": "Gligar ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 208,
        "name": "Steelix ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 209,
        "name": "Snubbull ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 210,
        "name": "Granbull ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 211,
        "name": "Qwilfish ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 212,
        "name": "Scizor ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 213,
        "name": "Shuckle ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 214,
        "name": "Heracross ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 215,
        "name": "Sneasel ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 216,
        "name": "Teddiursa ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 217,
        "name": "Ursaring ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 218,
        "name": "Slugma ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 219,
        "name": "Magcargo ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 220,
        "name": "Swinub ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 221,
        "name": "Piloswine ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 222,
        "name": "Corsola ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 223,
        "name": "Remoraid ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 224,
        "name": "Octillery ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 225,
        "name": "Delibird ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 226,
        "name": "Mantine ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 227,
        "name": "Skarmory ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 228,
        "name": "Houndour ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 229,
        "name": "Houndoom ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 230,
        "name": "Kingdra ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 231,
        "name": "Phanpy ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 232,
        "name": "Donphan ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 233,
        "name": "Porygon2 ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 234,
        "name": "Stantler ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 235,
        "name": "Smeargle ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 236,
        "name": "Tyrogue ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 237,
        "name": "Hitmontop ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 238,
        "name": "Smoochum ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 239,
        "name": "Elekid ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 240,
        "name": "Magby ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 241,
        "name": "Miltank ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 242,
        "name": "Blissey ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 243,
        "name": "Raikou ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 244,
        "name": "Entei ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 245,
        "name": "Suicune ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 246,
        "name": "Larvitar ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 247,
        "name": "Pupitar ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 248,
        "name": "Tyranitar ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 249,
        "name": "Lugia ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 250,
        "name": "Ho Oh ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 251,
        "name": "Celebi ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 252,
        "name": "Treecko ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 253,
        "name": "Grovyle ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 254,
        "name": "Sceptile ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 255,
        "name": "Torchic ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 256,
        "name": "Combusken ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 257,
        "name": "Blaziken ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 258,
        "name": "Mudkip ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 259,
        "name": "Marshtomp ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 260,
        "name": "Swampert ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 261,
        "name": "Poochyena ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 262,
        "name": "Mightyena ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 263,
        "name": "Zigzagoon ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 264,
        "name": "Linoone ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 265,
        "name": "Wurmple ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 266,
        "name": "Silcoon ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 267,
        "name": "Beautifly ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 268,
        "name": "Cascoon ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 269,
        "name": "Dustox ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 270,
        "name": "Lotad ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 271,
        "name": "Lombre ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 272,
        "name": "Ludicolo ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 273,
        "name": "Seedot ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 274,
        "name": "Nuzleaf ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 275,
        "name": "Shiftry ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 276,
        "name": "Taillow ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 277,
        "name": "Swellow ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 278,
        "name": "Wingull ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 279,
        "name": "Pelipper ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 280,
        "name": "Ralts ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 281,
        "name": "Kirlia ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 282,
        "name": "Gardevoir ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 283,
        "name": "Surskit ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 284,
        "name": "Masquerain ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 285,
        "name": "Shroomish ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 286,
        "name": "Breloom ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 287,
        "name": "Slakoth ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 288,
        "name": "Vigoroth ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 289,
        "name": "Slaking ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 290,
        "name": "Nincada ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 291,
        "name": "Ninjask ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 292,
        "name": "Shedinja ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 293,
        "name": "Whismur ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 294,
        "name": "Loudred ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 295,
        "name": "Exploud ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 296,
        "name": "Makuhita ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 297,
        "name": "Hariyama ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 298,
        "name": "Azurill ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 299,
        "name": "Nosepass ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 300,
        "name": "Skitty ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 301,
        "name": "Delcatty ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 302,
        "name": "Sableye ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 303,
        "name": "Mawile ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 304,
        "name": "Aron ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 305,
        "name": "Lairon ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 306,
        "name": "Aggron ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 307,
        "name": "Meditite ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 308,
        "name": "Medicham ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 309,
        "name": "Electrike ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 310,
        "name": "Manectric ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 311,
        "name": "Plusle ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 312,
        "name": "Minun ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 313,
        "name": "Volbeat ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 314,
        "name": "Illumise ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 315,
        "name": "Roselia ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 316,
        "name": "Gulpin ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 317,
        "name": "Swalot ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 318,
        "name": "Carvanha ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 319,
        "name": "Sharpedo ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 320,
        "name": "Wailmer ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 321,
        "name": "Wailord ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 322,
        "name": "Numel ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 323,
        "name": "Camerupt ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 324,
        "name": "Torkoal ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 325,
        "name": "Spoink ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 326,
        "name": "Grumpig ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 327,
        "name": "Spinda ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 328,
        "name": "Trapinch ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 329,
        "name": "Vibrava ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 330,
        "name": "Flygon ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 331,
        "name": "Cacnea ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 332,
        "name": "Cacturne ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 333,
        "name": "Swablu ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 334,
        "name": "Altaria ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 335,
        "name": "Zangoose ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 336,
        "name": "Seviper ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 337,
        "name": "Lunatone ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 338,
        "name": "Solrock ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 339,
        "name": "Barboach ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 340,
        "name": "Whiscash ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 341,
        "name": "Corphish ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 342,
        "name": "Crawdaunt ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 343,
        "name": "Baltoy ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 344,
        "name": "Claydol ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 345,
        "name": "Lileep ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 346,
        "name": "Cradily ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 347,
        "name": "Anorith ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 348,
        "name": "Armaldo ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 349,
        "name": "Feebas ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 350,
        "name": "Milotic ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 351,
        "name": "Castform ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 352,
        "name": "Kecleon ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 353,
        "name": "Shuppet ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 354,
        "name": "Banette ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 355,
        "name": "Duskull ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 356,
        "name": "Dusclops ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 357,
        "name": "Tropius ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 358,
        "name": "Chimecho ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 359,
        "name": "Absol ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 360,
        "name": "Wynaut ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 361,
        "name": "Snorunt ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 362,
        "name": "Glalie ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 363,
        "name": "Spheal ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 364,
        "name": "Sealeo ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 365,
        "name": "Walrein ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 366,
        "name": "Clamperl ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 367,
        "name": "Huntail ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 368,
        "name": "Gorebyss ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 369,
        "name": "Relicanth ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 370,
        "name": "Luvdisc ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 371,
        "name": "Bagon ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 372,
        "name": "Shelgon ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 373,
        "name": "Salamence ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 374,
        "name": "Beldum ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 375,
        "name": "Metang ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 376,
        "name": "Metagross ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 377,
        "name": "Regirock ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 378,
        "name": "Regice ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 379,
        "name": "Registeel ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 380,
        "name": "Latias ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 381,
        "name": "Latios ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 382,
        "name": "Kyogre ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 383,
        "name": "Groudon ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 384,
        "name": "Rayquaza ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 385,
        "name": "Jirachi ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 386,
        "name": "Deoxys Normal ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 387,
        "name": "Turtwig ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 388,
        "name": "Grotle ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 389,
        "name": "Torterra ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 390,
        "name": "Chimchar ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 391,
        "name": "Monferno ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 392,
        "name": "Infernape ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 393,
        "name": "Piplup ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 394,
        "name": "Prinplup ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 395,
        "name": "Empoleon ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 396,
        "name": "Starly ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 397,
        "name": "Staravia ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 398,
        "name": "Staraptor ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 399,
        "name": "Bidoof ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 400,
        "name": "Bibarel ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 401,
        "name": "Kricketot ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 402,
        "name": "Kricketune ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 403,
        "name": "Shinx ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 404,
        "name": "Luxio ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 405,
        "name": "Luxray ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 406,
        "name": "Budew ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 407,
        "name": "Roserade ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 408,
        "name": "Cranidos ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 409,
        "name": "Rampardos ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 410,
        "name": "Shieldon ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 411,
        "name": "Bastiodon ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 412,
        "name": "Burmy ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 413,
        "name": "Wormadam Plant ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 414,
        "name": "Mothim ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 415,
        "name": "Combee ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 416,
        "name": "Vespiquen ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 417,
        "name": "Pachirisu ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 418,
        "name": "Buizel ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 419,
        "name": "Floatzel ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 420,
        "name": "Cherubi ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 421,
        "name": "Cherrim ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 422,
        "name": "Shellos ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 423,
        "name": "Gastrodon ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 424,
        "name": "Ambipom ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 425,
        "name": "Drifloon ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 426,
        "name": "Drifblim ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 427,
        "name": "Buneary ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 428,
        "name": "Lopunny ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 429,
        "name": "Mismagius ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 430,
        "name": "Honchkrow ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 431,
        "name": "Glameow ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 432,
        "name": "Purugly ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 433,
        "name": "Chingling ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 434,
        "name": "Stunky ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 435,
        "name": "Skuntank ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 436,
        "name": "Bronzor ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 437,
        "name": "Bronzong ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 438,
        "name": "Bonsly ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 439,
        "name": "Mime Jr ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 440,
        "name": "Happiny ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 441,
        "name": "Chatot ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 442,
        "name": "Spiritomb ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 443,
        "name": "Gible ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 444,
        "name": "Gabite ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 445,
        "name": "Garchomp ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 446,
        "name": "Munchlax ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 447,
        "name": "Riolu ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 448,
        "name": "Lucario ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 449,
        "name": "Hippopotas ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 450,
        "name": "Hippowdon ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 451,
        "name": "Skorupi ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 452,
        "name": "Drapion ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 453,
        "name": "Croagunk ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 454,
        "name": "Toxicroak ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 455,
        "name": "Carnivine ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 456,
        "name": "Finneon ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 457,
        "name": "Lumineon ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 458,
        "name": "Mantyke ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 459,
        "name": "Snover ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 460,
        "name": "Abomasnow ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 461,
        "name": "Weavile ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 462,
        "name": "Magnezone ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 463,
        "name": "Lickilicky ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 464,
        "name": "Rhyperior ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 465,
        "name": "Tangrowth ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 466,
        "name": "Electivire ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 467,
        "name": "Magmortar ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 468,
        "name": "Togekiss ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 469,
        "name": "Yanmega ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 470,
        "name": "Leafeon ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 471,
        "name": "Glaceon ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 472,
        "name": "Gliscor ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 473,
        "name": "Mamoswine ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 474,
        "name": "Porygon Z ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 475,
        "name": "Gallade ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 476,
        "name": "Probopass ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 477,
        "name": "Dusknoir ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 478,
        "name": "Froslass ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 479,
        "name": "Rotom ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 480,
        "name": "Uxie ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 481,
        "name": "Mesprit ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 482,
        "name": "Azelf ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 483,
        "name": "Dialga ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 484,
        "name": "Palkia ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 485,
        "name": "Heatran ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 486,
        "name": "Regigigas ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 487,
        "name": "Giratina Altered ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 488,
        "name": "Cresselia ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 489,
        "name": "Phione ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 490,
        "name": "Manaphy ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 491,
        "name": "Darkrai ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 492,
        "name": "Shaymin Land ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 493,
        "name": "Arceus ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 494,
        "name": "Victini ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 495,
        "name": "Snivy ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 496,
        "name": "Servine ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 497,
        "name": "Serperior ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 498,
        "name": "Tepig ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 499,
        "name": "Pignite ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 500,
        "name": "Emboar ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 501,
        "name": "Oshawott ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 502,
        "name": "Dewott ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 503,
        "name": "Samurott ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 504,
        "name": "Patrat ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 505,
        "name": "Watchog ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 506,
        "name": "Lillipup ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 507,
        "name": "Herdier ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 508,
        "name": "Stoutland ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 509,
        "name": "Purrloin ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 510,
        "name": "Liepard ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 511,
        "name": "Pansage ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 512,
        "name": "Simisage ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 513,
        "name": "Pansear ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 514,
        "name": "Simisear ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 515,
        "name": "Panpour ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 516,
        "name": "Simipour ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 517,
        "name": "Munna ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 518,
        "name": "Musharna ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 519,
        "name": "Pidove ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 520,
        "name": "Tranquill ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 521,
        "name": "Unfezant ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 522,
        "name": "Blitzle ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 523,
        "name": "Zebstrika ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 524,
        "name": "Roggenrola ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 525,
        "name": "Boldore ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 526,
        "name": "Gigalith ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 527,
        "name": "Woobat ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 528,
        "name": "Swoobat ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 529,
        "name": "Drilbur ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 530,
        "name": "Excadrill ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 531,
        "name": "Audino ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 532,
        "name": "Timburr ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 533,
        "name": "Gurdurr ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 534,
        "name": "Conkeldurr ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 535,
        "name": "Tympole ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 536,
        "name": "Palpitoad ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 537,
        "name": "Seismitoad ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 538,
        "name": "Throh ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 539,
        "name": "Sawk ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 540,
        "name": "Sewaddle ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 541,
        "name": "Swadloon ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 542,
        "name": "Leavanny ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 543,
        "name": "Venipede ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 544,
        "name": "Whirlipede ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 545,
        "name": "Scolipede ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 546,
        "name": "Cottonee ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 547,
        "name": "Whimsicott ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 548,
        "name": "Petilil ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 549,
        "name": "Lilligant ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 550,
        "name": "Basculin Red Striped ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 551,
        "name": "Sandile ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 552,
        "name": "Krokorok ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 553,
        "name": "Krookodile ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 554,
        "name": "Darumaka ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 555,
        "name": "Darmanitan Standard ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 556,
        "name": "Maractus ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 557,
        "name": "Dwebble ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 558,
        "name": "Crustle ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 559,
        "name": "Scraggy ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 560,
        "name": "Scrafty ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 561,
        "name": "Sigilyph ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 562,
        "name": "Yamask ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 563,
        "name": "Cofagrigus ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 564,
        "name": "Tirtouga ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 565,
        "name": "Carracosta ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 566,
        "name": "Archen ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 567,
        "name": "Archeops ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 568,
        "name": "Trubbish ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 569,
        "name": "Garbodor ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 570,
        "name": "Zorua ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 571,
        "name": "Zoroark ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 572,
        "name": "Minccino ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 573,
        "name": "Cinccino ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 574,
        "name": "Gothita ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 575,
        "name": "Gothorita ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 576,
        "name": "Gothitelle ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 577,
        "name": "Solosis ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 578,
        "name": "Duosion ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 579,
        "name": "Reuniclus ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 580,
        "name": "Ducklett ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 581,
        "name": "Swanna ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 582,
        "name": "Vanillite ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 583,
        "name": "Vanillish ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 584,
        "name": "Vanilluxe ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 585,
        "name": "Deerling ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 586,
        "name": "Sawsbuck ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 587,
        "name": "Emolga ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 588,
        "name": "Karrablast ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 589,
        "name": "Escavalier ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 590,
        "name": "Foongus ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 591,
        "name": "Amoonguss ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 592,
        "name": "Frillish ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 593,
        "name": "Jellicent ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 594,
        "name": "Alomomola ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 595,
        "name": "Joltik ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 596,
        "name": "Galvantula ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 597,
        "name": "Ferroseed ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 598,
        "name": "Ferrothorn ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 599,
        "name": "Klink ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 600,
        "name": "Klang ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 601,
        "name": "Klinklang ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 602,
        "name": "Tynamo ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 603,
        "name": "Eelektrik ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 604,
        "name": "Eelektross ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 605,
        "name": "Elgyem ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 606,
        "name": "Beheeyem ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 607,
        "name": "Litwick ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 608,
        "name": "Lampent ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 609,
        "name": "Chandelure ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 610,
        "name": "Axew ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 611,
        "name": "Fraxure ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 612,
        "name": "Haxorus ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 613,
        "name": "Cubchoo ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 614,
        "name": "Beartic ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 615,
        "name": "Cryogonal ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 616,
        "name": "Shelmet ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 617,
        "name": "Accelgor ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 618,
        "name": "Stunfisk ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 619,
        "name": "Mienfoo ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 620,
        "name": "Mienshao ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 621,
        "name": "Druddigon ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 622,
        "name": "Golett ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 623,
        "name": "Golurk ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 624,
        "name": "Pawniard ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 625,
        "name": "Bisharp ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 626,
        "name": "Bouffalant ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 627,
        "name": "Rufflet ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 628,
        "name": "Braviary ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 629,
        "name": "Vullaby ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 630,
        "name": "Mandibuzz ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 631,
        "name": "Heatmor ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 632,
        "name": "Durant ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 633,
        "name": "Deino ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 634,
        "name": "Zweilous ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 635,
        "name": "Hydreigon ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 636,
        "name": "Larvesta ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 637,
        "name": "Volcarona ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 638,
        "name": "Cobalion ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 639,
        "name": "Terrakion ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 640,
        "name": "Virizion ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 641,
        "name": "Tornadus Incarnate ",
        "types": [
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 642,
        "name": "Thundurus Incarnate ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 643,
        "name": "Reshiram ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 644,
        "name": "Zekrom ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 645,
        "name": "Landorus Incarnate ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 646,
        "name": "Kyurem ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 647,
        "name": "Keldeo Ordinary ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 648,
        "name": "Meloetta Aria ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 649,
        "name": "Genesect ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 650,
        "name": "Chespin ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 651,
        "name": "Quilladin ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 652,
        "name": "Chesnaught ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 653,
        "name": "Fennekin ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 654,
        "name": "Braixen ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 655,
        "name": "Delphox ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 656,
        "name": "Froakie ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 657,
        "name": "Frogadier ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 658,
        "name": "Greninja ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 659,
        "name": "Bunnelby ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 660,
        "name": "Diggersby ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 661,
        "name": "Fletchling ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 662,
        "name": "Fletchinder ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 663,
        "name": "Talonflame ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 664,
        "name": "Scatterbug ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 665,
        "name": "Spewpa ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 666,
        "name": "Vivillon ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 667,
        "name": "Litleo ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 668,
        "name": "Pyroar ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 669,
        "name": "Flabebe ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 670,
        "name": "Floette ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 671,
        "name": "Florges ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 672,
        "name": "Skiddo ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 673,
        "name": "Gogoat ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 674,
        "name": "Pancham ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 675,
        "name": "Pangoro ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 676,
        "name": "Furfrou ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 677,
        "name": "Espurr ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 678,
        "name": "Meowstic Male ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 679,
        "name": "Honedge ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 680,
        "name": "Doublade ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 681,
        "name": "Aegislash Shield ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 682,
        "name": "Spritzee ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 683,
        "name": "Aromatisse ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 684,
        "name": "Swirlix ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 685,
        "name": "Slurpuff ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 686,
        "name": "Inkay ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 687,
        "name": "Malamar ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 688,
        "name": "Binacle ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 689,
        "name": "Barbaracle ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 690,
        "name": "Skrelp ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 691,
        "name": "Dragalge ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 692,
        "name": "Clauncher ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 693,
        "name": "Clawitzer ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 694,
        "name": "Helioptile ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 695,
        "name": "Heliolisk ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 696,
        "name": "Tyrunt ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 697,
        "name": "Tyrantrum ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 698,
        "name": "Amaura ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 699,
        "name": "Aurorus ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 700,
        "name": "Sylveon ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 701,
        "name": "Hawlucha ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 702,
        "name": "Dedenne ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 703,
        "name": "Carbink ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 704,
        "name": "Goomy ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 705,
        "name": "Sliggoo ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 706,
        "name": "Goodra ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 707,
        "name": "Klefki ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 708,
        "name": "Phantump ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 709,
        "name": "Trevenant ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 710,
        "name": "Pumpkaboo Average ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 711,
        "name": "Gourgeist Average ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 712,
        "name": "Bergmite ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 713,
        "name": "Avalugg ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 714,
        "name": "Noibat ",
        "types": [
            {
                "name": "flying",
                "color": "#a2c3e7"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 715,
        "name": "Noivern ",
        "types": [
            {
                "name": "flying",
                "color": "#a2c3e7"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 716,
        "name": "Xerneas ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 717,
        "name": "Yveltal ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 718,
        "name": "Zygarde 50 ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 719,
        "name": "Diancie ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 720,
        "name": "Hoopa ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 721,
        "name": "Volcanion ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 722,
        "name": "Rowlet ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 723,
        "name": "Dartrix ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 724,
        "name": "Decidueye ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 725,
        "name": "Litten ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 726,
        "name": "Torracat ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 727,
        "name": "Incineroar ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 728,
        "name": "Popplio ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 729,
        "name": "Brionne ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 730,
        "name": "Primarina ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 731,
        "name": "Pikipek ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 732,
        "name": "Trumbeak ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 733,
        "name": "Toucannon ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 734,
        "name": "Yungoos ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 735,
        "name": "Gumshoos ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 736,
        "name": "Grubbin ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 737,
        "name": "Charjabug ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 738,
        "name": "Vikavolt ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 739,
        "name": "Crabrawler ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 740,
        "name": "Crabominable ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 741,
        "name": "Oricorio Baile ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 742,
        "name": "Cutiefly ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 743,
        "name": "Ribombee ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 744,
        "name": "Rockruff ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 745,
        "name": "Lycanroc Midday ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 746,
        "name": "Wishiwashi Solo ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 747,
        "name": "Mareanie ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 748,
        "name": "Toxapex ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 749,
        "name": "Mudbray ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 750,
        "name": "Mudsdale ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 751,
        "name": "Dewpider ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 752,
        "name": "Araquanid ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 753,
        "name": "Fomantis ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 754,
        "name": "Lurantis ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 755,
        "name": "Morelull ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 756,
        "name": "Shiinotic ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 757,
        "name": "Salandit ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 758,
        "name": "Salazzle ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 759,
        "name": "Stufful ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 760,
        "name": "Bewear ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 761,
        "name": "Bounsweet ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 762,
        "name": "Steenee ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 763,
        "name": "Tsareena ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 764,
        "name": "Comfey ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 765,
        "name": "Oranguru ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 766,
        "name": "Passimian ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 767,
        "name": "Wimpod ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 768,
        "name": "Golisopod ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 769,
        "name": "Sandygast ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 770,
        "name": "Palossand ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 771,
        "name": "Pyukumuku ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 772,
        "name": "Type Null ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 773,
        "name": "Silvally ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 774,
        "name": "Minior Red Meteor ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 775,
        "name": "Komala ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 776,
        "name": "Turtonator ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 777,
        "name": "Togedemaru ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 778,
        "name": "Mimikyu Disguised ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 779,
        "name": "Bruxish ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 780,
        "name": "Drampa ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 781,
        "name": "Dhelmise ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 782,
        "name": "Jangmo O ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 783,
        "name": "Hakamo O ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 784,
        "name": "Kommo O ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 785,
        "name": "Tapu Koko ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 786,
        "name": "Tapu Lele ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 787,
        "name": "Tapu Bulu ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 788,
        "name": "Tapu Fini ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 789,
        "name": "Cosmog ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 790,
        "name": "Cosmoem ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 791,
        "name": "Solgaleo ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 792,
        "name": "Lunala ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 793,
        "name": "Nihilego ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 794,
        "name": "Buzzwole ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 795,
        "name": "Pheromosa ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 796,
        "name": "Xurkitree ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 797,
        "name": "Celesteela ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 798,
        "name": "Kartana ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 799,
        "name": "Guzzlord ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 800,
        "name": "Necrozma ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 801,
        "name": "Magearna ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 802,
        "name": "Marshadow ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 803,
        "name": "Poipole ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 804,
        "name": "Naganadel ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 805,
        "name": "Stakataka ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 806,
        "name": "Blacephalon ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 807,
        "name": "Zeraora ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 808,
        "name": "Meltan ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 809,
        "name": "Melmetal ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 810,
        "name": "Grookey ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 811,
        "name": "Thwackey ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 812,
        "name": "Rillaboom ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 813,
        "name": "Scorbunny ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 814,
        "name": "Raboot ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 815,
        "name": "Cinderace ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 816,
        "name": "Sobble ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 817,
        "name": "Drizzile ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 818,
        "name": "Inteleon ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 819,
        "name": "Skwovet ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 820,
        "name": "Greedent ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 821,
        "name": "Rookidee ",
        "types": [
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 822,
        "name": "Corvisquire ",
        "types": [
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 823,
        "name": "Corviknight ",
        "types": [
            {
                "name": "flying",
                "color": "#a2c3e7"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 824,
        "name": "Blipbug ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 825,
        "name": "Dottler ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 826,
        "name": "Orbeetle ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 827,
        "name": "Nickit ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 828,
        "name": "Thievul ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 829,
        "name": "Gossifleur ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 830,
        "name": "Eldegoss ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 831,
        "name": "Wooloo ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 832,
        "name": "Dubwool ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 833,
        "name": "Chewtle ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 834,
        "name": "Drednaw ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 835,
        "name": "Yamper ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 836,
        "name": "Boltund ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 837,
        "name": "Rolycoly ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 838,
        "name": "Carkol ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 839,
        "name": "Coalossal ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 840,
        "name": "Applin ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 841,
        "name": "Flapple ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 842,
        "name": "Appletun ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 843,
        "name": "Silicobra ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 844,
        "name": "Sandaconda ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 845,
        "name": "Cramorant ",
        "types": [
            {
                "name": "flying",
                "color": "#a2c3e7"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 846,
        "name": "Arrokuda ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 847,
        "name": "Barraskewda ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 848,
        "name": "Toxel ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 849,
        "name": "Toxtricity Amped ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 850,
        "name": "Sizzlipede ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 851,
        "name": "Centiskorch ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 852,
        "name": "Clobbopus ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 853,
        "name": "Grapploct ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 854,
        "name": "Sinistea ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 855,
        "name": "Polteageist ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 856,
        "name": "Hatenna ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 857,
        "name": "Hattrem ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 858,
        "name": "Hatterene ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 859,
        "name": "Impidimp ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 860,
        "name": "Morgrem ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 861,
        "name": "Grimmsnarl ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 862,
        "name": "Obstagoon ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 863,
        "name": "Perrserker ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 864,
        "name": "Cursola ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 865,
        "name": "Sirfetchd ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 866,
        "name": "Mr Rime ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 867,
        "name": "Runerigus ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 868,
        "name": "Milcery ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 869,
        "name": "Alcremie ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 870,
        "name": "Falinks ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 871,
        "name": "Pincurchin ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 872,
        "name": "Snom ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 873,
        "name": "Frosmoth ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 874,
        "name": "Stonjourner ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 875,
        "name": "Eiscue Ice ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 876,
        "name": "Indeedee Male ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 877,
        "name": "Morpeko Full Belly ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 878,
        "name": "Cufant ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 879,
        "name": "Copperajah ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 880,
        "name": "Dracozolt ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 881,
        "name": "Arctozolt ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 882,
        "name": "Dracovish ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 883,
        "name": "Arctovish ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 884,
        "name": "Duraludon ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 885,
        "name": "Dreepy ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 886,
        "name": "Drakloak ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 887,
        "name": "Dragapult ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 888,
        "name": "Zacian ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 889,
        "name": "Zamazenta ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 890,
        "name": "Eternatus ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 891,
        "name": "Kubfu ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 892,
        "name": "Urshifu Single Strike ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 893,
        "name": "Zarude ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 894,
        "name": "Regieleki ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 895,
        "name": "Regidrago ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 896,
        "name": "Glastrier ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 897,
        "name": "Spectrier ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 898,
        "name": "Calyrex ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 899,
        "name": "Wyrdeer ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 900,
        "name": "Kleavor ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 901,
        "name": "Ursaluna ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 902,
        "name": "Basculegion Male ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 903,
        "name": "Sneasler ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 904,
        "name": "Overqwil ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 905,
        "name": "Enamorus Incarnate ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 906,
        "name": "Sprigatito ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 907,
        "name": "Floragato ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 908,
        "name": "Meowscarada ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 909,
        "name": "Fuecoco ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 910,
        "name": "Crocalor ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 911,
        "name": "Skeledirge ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 912,
        "name": "Quaxly ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 913,
        "name": "Quaxwell ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 914,
        "name": "Quaquaval ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 915,
        "name": "Lechonk ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 916,
        "name": "Oinkologne ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 917,
        "name": "Tarountula ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 918,
        "name": "Spidops ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 919,
        "name": "Nymble ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 920,
        "name": "Lokix ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 921,
        "name": "Pawmi ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 922,
        "name": "Pawmo ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 923,
        "name": "Pawmot ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 924,
        "name": "Tandemaus ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 925,
        "name": "Maushold ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 926,
        "name": "Fidough ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 927,
        "name": "Dachsbun ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 928,
        "name": "Smoliv ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 929,
        "name": "Dolliv ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 930,
        "name": "Arboliva ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 931,
        "name": "Squawkabilly ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 932,
        "name": "Nacli ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 933,
        "name": "Naclstack ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 934,
        "name": "Garganacl ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 935,
        "name": "Charcadet ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 936,
        "name": "Armarouge ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 937,
        "name": "Ceruledge ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 938,
        "name": "Tadbulb ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 939,
        "name": "Bellibolt ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 940,
        "name": "Wattrel ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 941,
        "name": "Kilowattrel ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 942,
        "name": "Maschiff ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 943,
        "name": "Mabosstiff ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 944,
        "name": "Shroodle ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 945,
        "name": "Grafaiai ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 946,
        "name": "Bramblin ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 947,
        "name": "Brambleghast ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 948,
        "name": "Toedscool ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 949,
        "name": "Toedscruel ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 950,
        "name": "Klawf ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            }
        ]
    },
    {
        "id": 951,
        "name": "Capsakid ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 952,
        "name": "Scovillain ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 953,
        "name": "Rellor ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            }
        ]
    },
    {
        "id": 954,
        "name": "Rabsca ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 955,
        "name": "Flittle ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 956,
        "name": "Espathra ",
        "types": [
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 957,
        "name": "Tinkatink ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 958,
        "name": "Tinkatuff ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 959,
        "name": "Tinkaton ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 960,
        "name": "Wiglett ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 961,
        "name": "Wugtrio ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 962,
        "name": "Bombirdier ",
        "types": [
            {
                "name": "flying",
                "color": "#a2c3e7"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 963,
        "name": "Finizen ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 964,
        "name": "Palafin ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 965,
        "name": "Varoom ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 966,
        "name": "Revavroom ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 967,
        "name": "Cyclizar ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 968,
        "name": "Orthworm ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 969,
        "name": "Glimmet ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 970,
        "name": "Glimmora ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 971,
        "name": "Greavard ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 972,
        "name": "Houndstone ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 973,
        "name": "Flamigo ",
        "types": [
            {
                "name": "flying",
                "color": "#a2c3e7"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 974,
        "name": "Cetoddle ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 975,
        "name": "Cetitan ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 976,
        "name": "Veluza ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 977,
        "name": "Dondozo ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 978,
        "name": "Tatsugiri ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 979,
        "name": "Annihilape ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 980,
        "name": "Clodsire ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 981,
        "name": "Farigiraf ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 982,
        "name": "Dudunsparce ",
        "types": [
            {
                "name": "normal",
                "color": "#949495"
            }
        ]
    },
    {
        "id": 983,
        "name": "Kingambit ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 984,
        "name": "Great Tusk ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 985,
        "name": "Scream Tail ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 986,
        "name": "Brute Bonnet ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 987,
        "name": "Flutter Mane ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 988,
        "name": "Slither Wing ",
        "types": [
            {
                "name": "bug",
                "color": "#9fa244"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 989,
        "name": "Sandy Shocks ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 990,
        "name": "Iron Treads ",
        "types": [
            {
                "name": "ground",
                "color": "#9c7743"
            },
            {
                "name": "steel",
                "color": "#535252"
            }
        ]
    },
    {
        "id": 991,
        "name": "Iron Bundle ",
        "types": [
            {
                "name": "ice",
                "color": "#6dc8eb"
            },
            {
                "name": "water",
                "color": "#5185c5"
            }
        ]
    },
    {
        "id": 992,
        "name": "Iron Hands ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 993,
        "name": "Iron Jugulis ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "flying",
                "color": "#a2c3e7"
            }
        ]
    },
    {
        "id": 994,
        "name": "Iron Moth ",
        "types": [
            {
                "name": "fire",
                "color": "#e56c3e"
            },
            {
                "name": "poison",
                "color": "#8f61bf"
            }
        ]
    },
    {
        "id": 995,
        "name": "Iron Thorns ",
        "types": [
            {
                "name": "rock",
                "color": "#bfb889"
            },
            {
                "name": "electric",
                "color": "#f6d851"
            }
        ]
    },
    {
        "id": 996,
        "name": "Frigibax ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 997,
        "name": "Arctibax ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 998,
        "name": "Baxcalibur ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 999,
        "name": "Gimmighoul ",
        "types": [
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 1000,
        "name": "Gholdengo ",
        "types": [
            {
                "name": "steel",
                "color": "#535252"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 1001,
        "name": "Wo Chien ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    },
    {
        "id": 1002,
        "name": "Chien Pao ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "ice",
                "color": "#6dc8eb"
            }
        ]
    },
    {
        "id": 1003,
        "name": "Ting Lu ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "ground",
                "color": "#9c7743"
            }
        ]
    },
    {
        "id": 1004,
        "name": "Chi Yu ",
        "types": [
            {
                "name": "dark",
                "color": "#212020"
            },
            {
                "name": "fire",
                "color": "#e56c3e"
            }
        ]
    },
    {
        "id": 1005,
        "name": "Roaring Moon ",
        "types": [
            {
                "name": "dragon",
                "color": "#535ca8"
            },
            {
                "name": "dark",
                "color": "#212020"
            }
        ]
    },
    {
        "id": 1006,
        "name": "Iron Valiant ",
        "types": [
            {
                "name": "fairy",
                "color": "#dab4d4"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 1007,
        "name": "Koraidon ",
        "types": [
            {
                "name": "fighting",
                "color": "#730e0f"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 1008,
        "name": "Miraidon ",
        "types": [
            {
                "name": "electric",
                "color": "#f6d851"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 1009,
        "name": "Walking Wake ",
        "types": [
            {
                "name": "water",
                "color": "#5185c5"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 1010,
        "name": "Iron Leaves ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 1011,
        "name": "Dipplin ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "dragon",
                "color": "#535ca8"
            }
        ]
    },
    {
        "id": 1012,
        "name": "Poltchageist ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 1013,
        "name": "Sinistcha ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            },
            {
                "name": "ghost",
                "color": "#684870"
            }
        ]
    },
    {
        "id": 1014,
        "name": "Okidogi ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "fighting",
                "color": "#730e0f"
            }
        ]
    },
    {
        "id": 1015,
        "name": "Munkidori ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "psychic",
                "color": "#dd6b7b"
            }
        ]
    },
    {
        "id": 1016,
        "name": "Fezandipiti ",
        "types": [
            {
                "name": "poison",
                "color": "#8f61bf"
            },
            {
                "name": "fairy",
                "color": "#dab4d4"
            }
        ]
    },
    {
        "id": 1017,
        "name": "Ogerpon ",
        "types": [
            {
                "name": "grass",
                "color": "#66a945"
            }
        ]
    }
]