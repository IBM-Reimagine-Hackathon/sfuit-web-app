import React from 'react'
import AnalysisBoard from '../../Components/AnalysisBoard/AnalysisBoard'
import Board from '../../Components/Board/Board'
import SideBar from '../../Components/SideBar/SideBar'
import './Analysis.css'

function Analysis() {
    return (
        <div>
            <SideBar />
            <AnalysisBoard />
        </div>
    )
}

export default Analysis
