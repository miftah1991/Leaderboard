class Leaders {
    static scores = [];

    constructor(name, score) {
      this.name = name;
      this.score = score;
    }

    static saveLocalStorage() {
      localStorage.setItem('leaders', JSON.stringify(this.scores));
    }
}

export default Leaders;