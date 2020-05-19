import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/Navbar/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Homepage from "./components/Homepage/Homepage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ProductPage from "./hooks/ProductPage/ProductPage";
import AuthDrawer from "./components/AuthDrawer/AuthDrawer";
import ShoppingCartDrawer from "./components/ShoppingCartDrawer/ShoppingCartDrawer";
import SignOut from "./components/Navbar/SecondaryNav/SignOut/SignOut";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import NotFound from "./components/NotFound/NotFound";
import http from "./services/httpService";
import config from "./config.json";
import CartContextProvider from "./contexts/CartContext";
import FilterDropdownContextProvider from "./contexts/FilterDropdownContext";
import ProductsContextProvider from "./contexts/ProductsContext";

// class App extends Component {
//   state = {
//     sideDrawerOpen: false,
//     signInDrawerOpen: false,
//     registerDrawerOpen: false,
//     shoppingCartDrawerOpen: false,
//     signOutDrawerOpen: false,
//     filterDropdownOpen: false,
//     addToCartClicked: false,
//     products: [],
//     productTypes: [],
//     cart: [],
//   };

//   async componentDidMount() {
//     const { data: products } = await http.get(config.apiUrl + "/products");

//     const { data } = await http.get(config.apiUrl + "/producttypes");
//     const productTypes = [{ name: "View All", id: 0, route: "" }, ...data];

//     this.setState({ products, productTypes });

//     try {
//       const jwt = localStorage.getItem("token");
//       const user = jwtDecode(jwt);
//       this.setState({ user });
//     } catch (ex) {}
//   }

//   handleAnimation = () => {
//     this.setState({ addToCartClicked: false });
//   };

//   handleDrawerToggleClick = () => {
//     this.setState({ sideDrawerOpen: true });
//   };

//   handleBackdropClick = () => {
//     this.setState({ sideDrawerOpen: false });
//   };

//   handleSignInIconClick = () => {
//     this.setState({ registerDrawerOpen: false, signInDrawerOpen: true });
//   };

//   handleXButtonClick = () => {
//     this.setState({ signInDrawerOpen: false });
//   };

//   handleCloseNavbar = () => {
//     this.setState({ sideDrawerOpen: false });
//   };

//   handleRegisterSpanClick = () => {
//     this.setState({ registerDrawerOpen: true });
//   };

//   handleEnterButtonClick = (errors) => {
//     console.log(Object.keys(errors).length);
//     if (Object.keys(errors).length !== 0)
//       this.setState({ registerDrawerOpen: true });
//     else this.setState({ registerDrawerOpen: false });
//   };

//   handleShoppingCartClick = () => {
//     this.setState({ shoppingCartDrawerOpen: true });
//   };

//   handleCloseShoppingCart = () => {
//     this.setState({ shoppingCartDrawerOpen: false });
//   };

//   handleLike = (product) => {
//     const products = [...this.state.products];
//     const index = products.findIndex((p) => p._id === product._id);
//     products[index].liked = !products[index].liked;
//     this.setState({ products });
//   };

//   handleDeleteWishlistProduct = (product) => {
//     const products = [...this.state.products];
//     const index = products.indexOf(product);
//     products[index] = { ...products[index] };
//     products[index].liked = false;
//     this.setState({ products });
//   };
//   // handleAddToCart = (product) => {
//   //   const products = [...this.state.products];
//   //   const index = products.indexOf(product);
//   //   products[index] = { ...product };
//   //   products[index].count++;
//   //   this.setState({ products });
//   // };

//   handleAddToCart = (product, size) => {
//     const cart = [...this.state.cart];
//     const index = cart.findIndex(
//       (item) => item._id === product._id && item.size === size
//     );

//     if (index >= 0) {
//       cart[index] = { ...this.state.cart[index] };
//       cart[index].count++;
//     } else
//       cart.push({
//         _id: product._id,
//         name: product.name,
//         link: product.link,
//         price: product.price,
//         size,
//         count: 1,
//       });

//     this.setState({ cart, addToCartClicked: true });
//   };

//   handleIncrementQuantity = (item) => {
//     const cart = [...this.state.cart];
//     const index = cart.findIndex(
//       (i) => i._id === item._id && i.size === item.size
//     );
//     cart[index] = { ...item };
//     cart[index].count++;

//     this.setState({ cart });
//   };

//   handleDecrementQuantity = (item) => {
//     const cart = [...this.state.cart];
//     const index = cart.findIndex(
//       (i) => i._id === item._id && i.size === item.size
//     );
//     cart[index] = { ...item };

//     if (cart[index].count > 1) {
//       cart[index].count--;
//       this.setState({ cart });
//     } else {
//       cart.splice(cart[index], 1);
//     }

//     this.setState({ cart });
//   };

//   handleSignOutIconClick = () => {
//     this.setState({ signOutDrawerOpen: !this.state.signOutDrawerOpen });
//   };

//   handleFilterDropdown = () => {
//     this.setState({ filterDropdownOpen: !this.state.filterDropdownOpen });
//   };

//   // handleFilterByProductType = (productType) => {
//   //   // const filteredProducts = this.state.products.filter(
//   //   //   (p) => p.type === productType.name
//   //   // );
//   //   this.setState({ currentProductType: productType.name });
//   // };

//   // handleProductChoice = (product) => {
//   //   const chosenProduct = product;
//   //   this.setState({ chosenProduct });
//   // };

//   render() {
//     const {
//       sideDrawerOpen,
//       signInDrawerOpen,
//       signOutDrawerOpen,
//       registerDrawerOpen,
//       shoppingCartDrawerOpen,
//       filterDropdownOpen,
//       addToCartClicked,
//       products,
//       productTypes,
//       user,
//       cart,
//     } = this.state;
//     let backdrop;

//     if (sideDrawerOpen) {
//       backdrop = <Backdrop onBackdropClick={this.handleBackdropClick} />;
//     }

//     // let classesOfMain = shoppingCartDrawerOpen ? "hidden" : "visible";
//     // style={{ height: "100vh", overflow: classesOfMain }}
//     return (
//       <main>
//         <NavBar
//           user={user}
//           cart={cart}
//           signOutDrawerOpen={signOutDrawerOpen}
//           productTypes={productTypes}
//           addToCartClicked={addToCartClicked}
//           onSignInIconClick={this.handleSignInIconClick}
//           onSignOutIconClick={this.handleSignOutIconClick}
//           onDrawerToggleClick={this.handleDrawerToggleClick}
//           onXButtonClick={this.handleXButtonClick}
//           onShoppingCartClick={this.handleShoppingCartClick}
//           onAnimation={this.handleAnimation}
//         />
//         <SignOut signOutDrawerOpen={signOutDrawerOpen} />
//         <SideDrawer
//           show={sideDrawerOpen}
//           onCloseNavbar={this.handleCloseNavbar}
//         />
//         <AuthDrawer
//           show={!user && signInDrawerOpen}
//           registerDrawerOpen={registerDrawerOpen}
//           onXButtonClick={this.handleXButtonClick}
//           onRegisterSpanClick={this.handleRegisterSpanClick}
//           onEnterButtonClick={this.handleEnterButtonClick}
//         />
//         <ShoppingCartDrawer
//           show={shoppingCartDrawerOpen}
//           onCloseShoppingCart={this.handleCloseShoppingCart}
//           cart={cart}
//           onIncrementQuantity={this.handleIncrementQuantity}
//           onDecrementQuantity={this.handleDecrementQuantity}
//         />
//         {backdrop}
//         <Switch>
//           <Route path="/home" component={Homepage}></Route>
//           <Route
//             path="/women/:route"
//             render={(props) => (
//               <ProductsPage
//                 {...props}
//                 products={products}
//                 productTypes={productTypes}
//                 filterDropdownOpen={filterDropdownOpen}
//                 onFilterDropdown={this.handleFilterDropdown}
//                 onLike={this.handleLike}
//                 onAddToCart={this.handleAddToCart}
//               />
//             )}
//           ></Route>
//           <Route
//             path="/women"
//             render={(props) => (
//               <ProductsPage
//                 {...props}
//                 products={products}
//                 productTypes={productTypes}
//                 filterDropdownOpen={filterDropdownOpen}
//                 onFilterDropdown={this.handleFilterDropdown}
//                 onLike={this.handleLike}
//                 onAddToCart={this.handleAddToCart}
//               />
//             )}
//           ></Route>
//           <Route
//             path="/products/:productRoute"
//             render={(props) => (
//               <ProductPage
//                 {...props}
//                 products={products}
//                 onLike={this.handleLike}
//                 onAddToCart={this.handleAddToCart}
//               />
//             )}
//           />
//           <Route
//             path="/wishlist"
//             render={(props) => (
//               <WishlistPage
//                 {...props}
//                 products={products}
//                 onAddToCart={this.handleAddToCart}
//                 onDeleteWishlistProduct={this.handleDeleteWishlistProduct}
//               />
//             )}
//           ></Route>
//           <Route path="/not-found" component={NotFound}></Route>
//           <Redirect from="/" exact to="/home" />
//           <Redirect to="not-found" />
//         </Switch>
//         <Footer />
//       </main>
//     );
//   }
// }

// function App() {
//   let [sideDrawerOpen, setSideDrawer] = useState(false);
//   let [signInDrawerOpen, setSignInDrawer] = useState(false);
//   let [registerDrawerOpen, setRegisterDrawer] = useState(false);
//   let [shoppingCartDrawerOpen, setShoppingCartDrawer] = useState(false);
//   let [signOutDrawerOpen, setSignOutDrawer] = useState(false);
//   let [filterDropdownOpen, setFilterDropdown] = useState(false);
//   let [addToCartClicked, setAddToCart] = useState(false);
//   let [products, setProducts] = useState([]);
//   let [productTypes, setProductTypes] = useState([]);
//   let [cart, setCart] = useState([]);
//   let [user, setUser] = useState({});

//   useEffect(() => {
//     async function getProducts() {
//       const { data: products } = await http.get(config.apiUrl + "/products");

//       const { data } = await http.get(config.apiUrl + "/producttypes");
//       const productTypes = [{ name: "View All", id: 0, route: "" }, ...data];

//       setProducts(products);
//       setProductTypes(productTypes);
//     }

//     async function getUser() {
//       try {
//         const jwt = localStorage.getItem("token");
//         const user = jwtDecode(jwt);
//         setUser((prevState) => {
//           return { ...prevState, name: user.name, _id: user._id };
//         });
//       } catch (ex) {}
//     }

//     getProducts();
//     getUser();
//   }, []);

//   function handleSignInIconClick() {
//     setRegisterDrawer(false);
//     setSignInDrawer(true);
//   }

//   function handleEnterButtonClick(errors) {
//     setRegisterDrawer(() => {
//       if (Object.keys(errors).length !== 0) return true;
//       else return false;
//     });
//   }

//   function handleLike(product) {
//     setProducts((prevState) => {
//       products = [...prevState];
//       const index = products.findIndex((p) => p._id === product._id);
//       products[index].liked = !products[index].liked;
//       return products;
//     });
//   }

//   function handleDeleteWishlistProduct(product) {
//     setProducts((prevState) => {
//       products = [...prevState];
//       const index = products.indexOf(product);
//       products[index] = { ...products[index] };
//       products[index].liked = false;
//       return products;
//     });
//   }

//   function handleAddToCart(product, size) {
//     setCart((prevState) => {
//       const cart = [...prevState];
//       const index = cart.findIndex(
//         (item) => item._id === product._id && item.size === size
//       );

//       if (index >= 0) {
//         cart[index] = { ...prevState[index] };
//         cart[index].count++;
//       } else
//         cart.push({
//           _id: product._id,
//           name: product.name,
//           link: product.link,
//           price: product.price,
//           size,
//           count: 1,
//         });

//       return cart;
//     });

//     setAddToCart(true);
//   }

//   function handleIncrementQuantity(item) {
//     setCart((prevState) => {
//       const cart = [...prevState];
//       const index = cart.findIndex(
//         (i) => i._id === item._id && i.size === item.size
//       );
//       cart[index] = { ...item };
//       cart[index].count++;
//       return cart;
//     });
//   }

//   function handleDecrementQuantity(item) {
//     setCart((prevState) => {
//       const cart = [...prevState];
//       const index = cart.findIndex(
//         (i) => i._id === item._id && i.size === item.size
//       );
//       cart[index] = { ...item };

//       if (cart[index].count > 1) {
//         cart[index].count--;
//       } else {
//         cart.splice(cart[index], 1);
//       }

//       return cart;
//     });
//   }

//   function handleSignOutIconClick() {
//     setSignOutDrawer((prevState) => {
//       return !prevState;
//     });
//   }

//   function handleFilterDropdown() {
//     setFilterDropdown((prevState) => {
//       return !prevState;
//     });
//   }

//   let backdrop;

//   if (sideDrawerOpen) {
//     backdrop = <Backdrop onBackdropClick={() => setSideDrawer(false)} />;
//   }

//   return (
//     <main>
//       <NavBar
//         user={user}
//         cart={cart}
//         signOutDrawerOpen={signOutDrawerOpen}
//         productTypes={productTypes}
//         addToCartClicked={addToCartClicked}
//         onSignInIconClick={handleSignInIconClick}
//         onSignOutIconClick={handleSignOutIconClick}
//         onDrawerToggleClick={() => setSideDrawer(true)}
//         onXButtonClick={() => setSignInDrawer(false)}
//         onShoppingCartClick={() => setShoppingCartDrawer(true)}
//         onAnimation={() => setAddToCart(false)}
//       />
//       <SignOut signOutDrawerOpen={signOutDrawerOpen} />
//       <SideDrawer
//         show={sideDrawerOpen}
//         onCloseNavbar={() => setSideDrawer(false)}
//       />
//       <AuthDrawer
//         show={!user && signInDrawerOpen}
//         registerDrawerOpen={registerDrawerOpen}
//         onXButtonClick={() => setSignInDrawer(false)}
//         onRegisterSpanClick={() => setRegisterDrawer(true)}
//         onEnterButtonClick={handleEnterButtonClick}
//       />
//       <ShoppingCartDrawer
//         show={shoppingCartDrawerOpen}
//         onCloseShoppingCart={() => setShoppingCartDrawer(false)}
//         cart={cart}
//         onIncrementQuantity={handleIncrementQuantity}
//         onDecrementQuantity={handleDecrementQuantity}
//       />
//       {backdrop}
//       <Switch>
//         <Route path="/home" component={Homepage}></Route>
//         <Route
//           path="/women/:route"
//           render={(props) => (
//             <ProductsPage
//               {...props}
//               products={products}
//               productTypes={productTypes}
//               filterDropdownOpen={filterDropdownOpen}
//               onFilterDropdown={handleFilterDropdown}
//               onLike={handleLike}
//               onAddToCart={handleAddToCart}
//             />
//           )}
//         ></Route>
//         <Route
//           path="/women"
//           render={(props) => (
//             <ProductsPage
//               {...props}
//               products={products}
//               productTypes={productTypes}
//               filterDropdownOpen={filterDropdownOpen}
//               onFilterDropdown={handleFilterDropdown}
//               onLike={handleLike}
//               onAddToCart={handleAddToCart}
//             />
//           )}
//         ></Route>
//         <Route
//           path="/products/:productRoute"
//           render={(props) => (
//             <ProductPage
//               {...props}
//               products={products}
//               onLike={handleLike}
//               onAddToCart={handleAddToCart}
//             />
//           )}
//         />
//         <Route
//           path="/wishlist"
//           render={(props) => (
//             <WishlistPage
//               {...props}
//               products={products}
//               onAddToCart={handleAddToCart}
//               onDeleteWishlistProduct={handleDeleteWishlistProduct}
//             />
//           )}
//         ></Route>
//         <Route path="/not-found" component={NotFound}></Route>
//         <Redirect from="/" exact to="/home" />
//         <Redirect to="not-found" />
//       </Switch>
//       <Footer />
//     </main>
//   );
// }

function App() {
  let [sideDrawerOpen, setSideDrawer] = useState(false);
  let [signInDrawerOpen, setSignInDrawer] = useState(false);
  let [registerDrawerOpen, setRegisterDrawer] = useState(false);
  let [shoppingCartDrawerOpen, setShoppingCartDrawer] = useState(false);
  let [signOutDrawerOpen, setSignOutDrawer] = useState(false);
  let [productTypes, setProductTypes] = useState([]);
  let [user, setUser] = useState({});

  useEffect(() => {
    async function getProductTypes() {
      const { data } = await http.get(config.apiUrl + "/producttypes");
      const productTypes = [{ name: "View All", id: 0, route: "" }, ...data];

      setProductTypes(productTypes);
    }

    async function getUser() {
      try {
        const jwt = localStorage.getItem("token");
        const user = jwtDecode(jwt);
        setUser((prevState) => {
          return { ...prevState, name: user.name, _id: user._id };
        });
      } catch (ex) {}
    }

    getProductTypes();
    getUser();
  }, []);

  function handleEnterButtonClick(errors) {
    setRegisterDrawer(() => {
      if (Object.keys(errors).length !== 0) return true;
      else return false;
    });
  }

  function handleSignOutIconClick() {
    setSignOutDrawer((prevState) => {
      return !prevState;
    });
  }

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop onBackdropClick={() => setSideDrawer(false)} />;
  }

  return (
    <main>
      <CartContextProvider>
        <NavBar
          user={user}
          signOutDrawerOpen={signOutDrawerOpen}
          productTypes={productTypes}
          onSignInIconClick={() => setSignInDrawer(true)}
          onSignOutIconClick={handleSignOutIconClick}
          onDrawerToggleClick={() => setSideDrawer(true)}
          onShoppingCartClick={() => setShoppingCartDrawer(true)}

        />
        <SignOut signOutDrawerOpen={signOutDrawerOpen} />
        <SideDrawer
          show={sideDrawerOpen}
          onCloseNavbar={() => setSideDrawer(false)}
        />
        <AuthDrawer
          show={!user.name && signInDrawerOpen}
          registerDrawerOpen={registerDrawerOpen}
          onXButtonClick={() => setSignInDrawer(false)}
          onRegisterSpanClick={() => setRegisterDrawer(true)}
          onEnterButtonClick={handleEnterButtonClick}
        />
        <ShoppingCartDrawer
          show={shoppingCartDrawerOpen}
          onCloseShoppingCart={() => setShoppingCartDrawer(false)}
        />
        {backdrop}
        <ProductsContextProvider>
          <FilterDropdownContextProvider>
            <Switch>
              <Route path="/home" component={Homepage}></Route>
              <Route
                path="/women/:route"
                render={(props) => (
                  <ProductsPage {...props} productTypes={productTypes} />
                )}
              ></Route>
              <Route
                path="/women"
                render={(props) => (
                  <ProductsPage {...props} productTypes={productTypes} />
                )}
              ></Route>

              <Route
                path="/products/:productRoute"
                render={(props) => <ProductPage {...props} />}
              />
              <Route path="/wishlist" component={WishlistPage}/>
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect from="/" exact to="/home" />
              <Redirect to="not-found" />
            </Switch>
          </FilterDropdownContextProvider>
        </ProductsContextProvider>
      </CartContextProvider>
      <Footer />
    </main>
  );
}
export default App;
