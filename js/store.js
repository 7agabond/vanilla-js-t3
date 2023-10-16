const initialValue = {
  moves: [],
};

export default class Store {
  #state = initialValue;

  constructor(players) {
    this.players = players
  }

  get game() {
    const state = this.#getState();

    const currentPlayer = this.players[0]
  }

  #getState() {
    return this.#state;
  }

  #saveState(stateOrFn) {
    const prevState = this.#getState();

    let newState;

    switch (typeof stateOrFn) {
      case "function":
        newState = stateOrFn(prevState);
        break;
      case "object":
        newState = stateOrFn;
        break;
      default:
        throw new Error("Invalid argument passed to saveState");
    }

    this.#state = newState;
  }
}
