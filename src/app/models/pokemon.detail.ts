export class PokemonDetail {
    id: number;
    order: number;
    name: string;
    height: number;
    abilities: Ability[];
    spices: Species;
    types: Type[];
    weight: number;
    sprites: Sprite;
    stats: Stat[];
    flavor_text_entries: Flavor;

    constructor() {
        this.abilities  = [];
        this.types = [];
    }
}

class Ability  {
    ability: {
        name: string;
    }

    constructor() {

    }
}
class Flavor {
  flavor_text: string;
}

class Species {
    url: string;
}

class Type {
    slot: number;
    type: {
        name: string;
    }
}

class Sprite {
    front_default: string;
}

class Stat {
    base_stat: number;
    stat: {
        name: string;
    }
}
