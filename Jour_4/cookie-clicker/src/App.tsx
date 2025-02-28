import { Grid2 as Grid } from "@mui/material"
import { useEffect, useState } from "react"
import cookieData from "./constants/Cookie"
import upgradesData from "./constants/Upgrades"


function App() {

  const [cookie, setCookie] = useState(cookieData)
  const [upgrades, setUpgrades] = useState(upgradesData)

  useEffect(() => {
    
  }, [])

  const incrementCookie = () => {
    cookie.total += cookie.click_value
    setCookie({...cookie})
  }

/*useEffect to check if an item upgrade can be upgraded and changing the value from unlocked into locked  */
  useEffect(() => {
    upgrades.map((upgrade) => {
      if (cookie.total >= upgrade.cost) {
        upgrade.state = "unlocked"
        setUpgrades([...upgrades])
      }
      else
      {
        upgrade.state = "locked"
        setUpgrades([...upgrades])
      }
    })
  }, [cookie.total])

/* increase the total of cookies automaticaly after buying an upgrade by their produces per second*/
  useEffect(() => {
    const interval = setInterval(() => {
      let total = 0
      upgrades.map((upgrade) => {
        total += upgrade.owned * upgrade.produces
      })
      cookie.total += total
      setCookie({...cookie})
    }, 1000)
    return () => clearInterval(interval)
  }, [upgrades, cookie])


  const buyUpgrade = (index: number) => {
    if (cookie.total >= upgrades[index].cost) {
      cookie.total -= upgrades[index].cost
      upgrades[index].owned += 1
      setCookie({...cookie})
      upgrades[index].cost = Math.floor(upgrades[index].cost * 1.1)
      setCookie({...cookie})
      setUpgrades([...upgrades])
    }
  }

  return (

    <>
      <Grid container>
        <Grid size={6}>
          <h2>{Math.trunc(cookie.total)} Cookies</h2>
          <button onClick={() => incrementCookie()}>Click me</button>
        </Grid>
        <Grid size={6} sx={{overflowY: "scroll", height: "100vh"}}>
            <h2>Upgrades</h2>
            {upgrades.map((upgrade, index) => {
              return (
                <div key={index}>
                  <h4>{upgrade.name}</h4>
                  <p>Cost: {upgrade.cost}</p>
                  <p>Produces: {upgrade.produces}</p>
                  <p>Owned: {upgrade.owned}</p>
                  {upgrade.state === "locked" ? <button disabled >Upgrade</button> : <button onClick={() => buyUpgrade(index)}>Upgrade</button>}
                </div>
              )
            })}
        </Grid>
      </Grid>
    </>
  )
}

export default App
