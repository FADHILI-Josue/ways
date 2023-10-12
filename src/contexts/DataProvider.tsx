import { Dispatch, SetStateAction, createContext, useContext, useEffect, useReducer, useState } from "react";
import { Iproduct } from "../lib/types";
import { productsQuery } from "../lib/queries";
import { client } from "../lib/sanity";



type Action =
  | { type: 'addItem', payload: Iproduct[] }
  | { type: 'removeItem', payload: string }

// Define the context type
interface DataContextType {
  cartItems: Iproduct[]
  dispatchCartItems: Dispatch<Action>
  products: Iproduct[]
  setProducts: Dispatch<SetStateAction<Iproduct[]>>
}

const dataContext = createContext<DataContextType | undefined>(undefined);

interface Iprops {
  children: React.ReactNode
}



function cartReducer(state: Iproduct[], action: Action): Iproduct[] {
  switch (action.type) {
    case 'addItem':
      if (typeof window !== 'undefined') {
        if (Array.isArray(action.payload)) {
          const payload = action.payload as unknown as Iproduct[]
          if (state.includes(payload[0])) return state
          if (payload.length === 1) window.localStorage.setItem('cart', JSON.stringify([...state, ...action.payload]))            // window.localStorage.setItem('cart', JSON.stringify([{name:"fadhili", age:23},{name:"yves", age:23},{name:"hakimi", age:23}]))
        }
      }
      if (Array.isArray(action.payload)) {
        return [...state, ...action.payload] as Iproduct[];
      }
      else {
        return []
      }
    case 'removeItem':
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('cart', JSON.stringify(state.filter((e) => !(e.id == action.payload))))
      }
      return state.filter((e) => !(e.id == action.payload));
    default:
      return state;
  }
}
const DataProvider: React.FC<Iprops> = ({ children }) => {
  const [cartItems, dispatchCartItems] = useReducer(cartReducer, []);
  const [products, setProducts] = useState<Iproduct[]>([])

  const fetchProducts = async () => {
    try {
      const products = await client.fetch(productsQuery);
      setProducts(products)
      return products
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem('cart')
      item !== 'undefined' ? dispatchCartItems({ type: "addItem", payload: JSON.parse(item as string) }) : null
    }
    fetchProducts();
  }, [])
  return (
    <dataContext.Provider value={{ cartItems, dispatchCartItems, products, setProducts }}>
      {children}
    </dataContext.Provider>
  );
};

const useData = (): DataContextType => {
  const context = useContext(dataContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }

  return context;
};

export { DataProvider, useData };
