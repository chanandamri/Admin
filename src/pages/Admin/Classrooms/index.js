import { popupContext } from '../../../context/Admin/Popup'
import './style.css'
import MainButton from '../../../components/Admin/MainButton'
import Table from '../../../components/Admin/Table'
import ButtonListClass from '../../../components/Admin/ButtonListClass'
import { useEffect, useContext, useState } from 'react'
import EditClass from '../../../components/Admin/EditClass'
import { headerText } from '../../../context/hederText'
import React from 'react'
import NewTable from '../../../components/Admin/NewTable'


//Creator : Team E - Chanan
function Classroom() {
    // const {pagetion,setPagetion}=useState(0);
    // const paginationOrder = () => {
    //     const pages = Math.ceil(list.length / 7);
  
    //     const item = '';
    // setPagetion(pages);
    //     console.log("pages:", pages); 
    //   }
    //   useEffect(() => {
    //     paginationOrder()
    
    //   }, [])


    const [hederText, setHeaderText] = useContext(headerText);
    
    useEffect(()=>{
        setHeaderText("")
    },[])

    const { popup, setPopup } = useContext(popupContext)
    function onSubmit(e) {
        e.preventDefault();
        // console.log("i'm changing the server");
        setPopup(false)
    }

    return (
    <>
        <div className='container11'>
            <div className='addButton' >
                <MainButton onClick={() => setPopup(<EditClass onSubmit={onSubmit} >Add class</EditClass>)} >
                    Add New Classroom
                </MainButton>
            </div>
            <div className='mainTable' >
                <NewTable />
            </div>
            <div className='buttonListClass' >
                <ButtonListClass pages={8} />
            </div>
        </div>
    </>
    )
}


export default Classroom