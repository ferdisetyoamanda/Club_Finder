class ClubItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set club(club) {
    this._club = club;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
    }
    :host {
      display: block;
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
    }
    
    .fan-art-club {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
      

    }
    
    .club-info {
      padding: 24px;
      background-color: white;
      
}

    }
    
    .club-info > h2 {
      font-weight: lighter;
    }
    
    .club-info > p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10; /* number of lines to show */
    }
  </style>
      
  <div class="club-info">
  <h2>${this._club.strDrink}</h2>
    <div class="ingredients">
  <p style="margin-bottom:10px ;"><b>Ingredients</b></p>
  <ul>
    <li>${this._club.strIngredient1} : ${this._club.strMeasure1}</li>
    <li>${this._club.strIngredient2} : ${this._club.strMeasure2}</li>
    <li>Contains Alcohol  ${this._club.strAlcoholic}</li>
    <li>Category : ${this._club.strCategory}</li>
    <li>Gelas Type : ${this._club.strGlass}</li>
    
    
    
    
    
    
    
  </ul>
</div>
<div class="intruction">
<p style="margin-bottom:10px ;"><b> Instruction </b></p>
  <p>${this._club.strInstructions}</p>

</div>
<img class="fan-art-club" src="${this._club.strDrinkThumb}" alt="Fan Art">
</div>
    `;
  }
}

customElements.define('club-item', ClubItem);
