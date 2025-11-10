
// import './App.css'
// import Basic from './embedding-expression/Basic'
// import CallingFunction from './embedding-expression/CallingFunction'
// import Conditional from './embedding-expression/Conditional'
// import Sum from './embedding-expression/sum'

import BasicFc from "./functional-components/BasicFc"
import Home from "./functional-components/hooks/use_contest/Home"
import { ThemeProvider } from "./functional-components/hooks/use_contest/ThemeContext"
import UseEff from "./functional-components/hooks/use_effect/UseEff"
import UseList from "./functional-components/hooks/use_list/UseList"
import Counter from "./functional-components/hooks/use_state/Counter"
import Props_Fc from "./functional-components/Props_Fc"
import State from "./functional-components/State"

function App() {


  return (
    <>
      {/* -----embedding expresiion----- */}
      {/* <Basic/>  */}
      {/* <Sum/>
//       <CallingFunction/> */}
      {/* //       <Conditional/> */}
      {/* ...................functionalcomponents................... */}
      {/* <BasicFc /> */}
      {/* <State/> */}
      {/* <Props_Fc/> */}
      {/* <Counter/> */}

      {/* <UseEff/> */}
      {/* <UseList/> */}
      <ThemeProvider>
        <Home/>
      </ThemeProvider>
    </>
  )
}

export default App

//..............................CLASS COMPONENTS.................................

//rcc select and enter(react class component)
//import React, { Component } from 'react'
// import Updating from './class-components/life-cycle-methods/Updating'
// import Props from './class-components/Props'
// import UnMount from './class-components/life-cycle-methods/Unmount'
// import Unmount from './class-components/life-cycle-methods/Unmount'
// import BasicClass from './class-components/BasicClass'
// import State from './class-components/State'
// import Mount from './class-components/life-cycle-methods/mount'
// import Rendering from './embedding-expression/Rendering'
// import Props from './Props'

// export default class App extends Component {
//   render() {
//     return (
//       <>
{/* <BasicClass/> */ }
{/* <State/> */ }
{/* <Mount/> */ }
{/* <Rendering/> */ }

{/* <Updating />
              <Props name="Shilpakoorayil" designation/> */}
{/*    
   <Unmount/> */}

{/* </>
    )
  }
} */}

