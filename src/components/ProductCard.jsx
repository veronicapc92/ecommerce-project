import React, { Component } from "react";

const ProductCard = () => {
  return (
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img
        src="https://images.pexels.com/photos/1070030/pexels-photo-1070030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        class="db w-100 br2 br--top"
        alt="Flower shirt"
      />
      <div class="pa2 ph3-ns pb3-ns">
        <div class="dt w-100 mt1">
          <div class="dtc">
            <h1 class="f5 f4-ns mv0">Cat</h1>
          </div>
          <div class="dtc tr">
            <h2 class="f5 mv0">$1,000</h2>
          </div>
        </div>
        <p class="f6 lh-copy measure mt2 mid-gray">
          If it fits, i sits burrow under covers. Destroy couch leave hair
          everywhere, and touch water with paw then recoil in horror.
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
