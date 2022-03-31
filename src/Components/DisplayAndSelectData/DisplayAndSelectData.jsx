import React from "react";

class SelectTableComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            List: props.parentEntries,
            MasterChecked: false,
            SelectedList: [],
        };
    }

    onMasterCheck(e){
        let tempList = this.state.List;
        tempList.map((game)=>(game.selected = e.target.checked))

        this.setState({
            MasterChecked: e.target.checked,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    onGameCheck(e, item){
        let tempList = this.state.List;
        tempList.map((game)=>{
            if(game.id === item.id){
                game.selected = e.target.checked;
            }
            return game
        });

        const totalItems = this.state.List.length;
        const totalCheckedItems = tempList.filter((e)=>e.selected).length;

        this.setState({
            MasterChecked: totalItems === totalCheckedItems,
            List: tempList,
            SelectedList: this.state.List.filter((e)=>e.selected),
        });
    }

    getSelectedRows(){
        this.setState({
            SelectedList: this.state.List.filter((e)=>e.selected),
        })
    }
}

const DisplayAndSelectData = (props) => {
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Title</th>
                        <th>Publisher</th>
                        <th>Release Year</th>
                    </tr>
                </thead>

                <tbody>
                    {props.parentEntries.map((game)=>{
                        return(
                            <tr>
                                <td>{game.rank}</td>
                                <td>{game.name}</td>
                                <td>{game.publisher}</td>
                                <td>{game.year}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayAndSelectData;