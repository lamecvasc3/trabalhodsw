import React from "react"
import { Create } from "../../../components/Create/Create";
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './NewClientePage.style'


export const NewClient = () => {
    const style = useStyles();
    return (
    <div>
      <SideBar />
      <main className={style.content}>
        <div className={style.box}> 
        <Create t1="Nome" t2="CPF" t3="Telefone"></Create>
      </div>
      </main>
    </div>
  );
}
