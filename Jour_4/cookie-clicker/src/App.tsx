import { Button, Grid2 as Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import cookieData from "./constants/Cookie"
import upgradesData from "./constants/Upgrades"


function App() {

  const [cookie, setCookie] = useState(cookieData)
  const [upgrades, setUpgrades] = useState(upgradesData)

  const incrementCookie = () => {
    setCookie((prevCookie) => ({
      ...prevCookie,
      total: prevCookie.total + prevCookie.click_value
    }))
  }

  /*useEffect to check if an item upgrade can be upgraded and changing the value from unlocked into locked  */
  useEffect(() => {
    setUpgrades((actualUpgrades) =>
      actualUpgrades.map((upgrade) => ({
        ...upgrade,
        state: cookie.total >= upgrade.cost ? "unlocked" : "locked"
      }))
    );
  }, [cookie.total]);

  /* increase the total of cookies automaticaly after buying an upgrade by their produces per second*/
  useEffect(() => {
    const interval = setInterval(() => {
      setCookie((prevCookie) => {
        const totalProduction = upgrades.reduce((actual, upgrade) => actual + upgrade.owned * upgrade.produces, 0);
        return { ...prevCookie, total: prevCookie.total + totalProduction };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [upgrades]);


  const buyUpgrade = (index: number) => {
    setCookie((prevCookie) => {
      if (prevCookie.total < upgrades[index].cost) return prevCookie; // Not enough cookies, do nothing

      return {
        ...prevCookie,
        total: prevCookie.total - upgrades[index].cost
      };
    });

    setUpgrades((prevUpgrades) =>
      prevUpgrades.map((upgrade, i) =>
        i === index
          ? {
            ...upgrade,
            owned: upgrade.owned + 1,
            cost: Math.floor(upgrade.cost * 1.1)
          }
          : upgrade
      )
    );
  };


  return (

    <>
      <Grid container>
        <Grid size={6}>
          <Typography component={"h1"} variant="h3">{Math.trunc(cookie.total)} Cookies</Typography>
          <Button variant="contained" onClick={() => incrementCookie()} sx={{ color: "white", bgcolor: "black" }}>Click me</Button>
        </Grid>
        <Grid size={6} sx={{ overflowY: "scroll", height: "100vh" }}>
          <Typography component={"h1"} variant="h3" mb={2}>Upgrades</Typography>
          {upgrades.map((upgrade, index) => {
            return (
              <Grid key={index}>
                <Typography component={"h1"} variant="h6" mb={1}>{upgrade.name}</Typography>
                <Typography component={"p"}>Cost: {upgrade.cost}</Typography>
                <Typography component={"p"}>Produces: {upgrade.produces}</Typography>
                <Typography component={"p"}>Owned: {upgrade.owned}</Typography>
                {upgrade.state === "locked" ?
                  <Button variant="contained" disabled >Upgrade</Button> :
                  <Button variant="contained" onClick={() => buyUpgrade(index)} sx={{
                    color: "white",
                    bgcolor: "black"
                  }}>Upgrade
                  </Button>
                }
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default App
