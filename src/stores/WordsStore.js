import { action, computed, observable, makeAutoObservable } from "mobx";

class WordStore {
  @observable words = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action fetchData = () => {
    this.isLoading = true;
    return fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Что-то пошло не так");
        }
      })
      .then((response) => {
        this.words = response;
        this.isLoading = false;
      })
      .catch((error) => {
        this.error = error;
        this.isLoading = false;
      });
  };

  @action addWord = (thatNewWord) => {
    this.isLoading = true;

    return fetch("api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(thatNewWord),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Что-то пошло не так");
        }
      })
      .then(() => {
        this.words.push(thatNewWord);
        this.isLoading = false;
      });
  };

  @action removeWord = (id) => {
    const index = this.words.findIndex((word) => word.id === id);

    if (index !== -1) {
      this.words.splice(index, 1);
    }

    fetch(`api/words/${id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  };

  @computed get wordCount() {
    return this.words.length;
  }
}

export default WordStore;
