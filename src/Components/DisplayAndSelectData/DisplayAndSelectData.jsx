// import React from "react";

// class SelectTableComponent extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             List: props.parentEntries,
//             MasterChecked: false,
//             SelectedList: [],
//         };
//     }

//     onMasterCheck(e){
//         let tempList = this.state.List;
//         tempList.map((game)=>(game.selected = e.target.checked))

//         this.setState({
//             MasterChecked: e.target.checked,
//             List: tempList,
//             SelectedList: this.state.List.filter((e) => e.selected),
//         });
//     }

//     onGameCheck(e, item){
//         let tempList = this.state.List;
//         tempList.map((game)=>{
//             if(game.id === item.id){
//                 game.selected = e.target.checked;
//             }
//             return game
//         });

//         const totalItems = this.state.List.length;
//         const totalCheckedItems = tempList.filter((e)=>e.selected).length;

//         this.setState({
//             MasterChecked: totalItems === totalCheckedItems,
//             List: tempList,
//             SelectedList: this.state.List.filter((e)=>e.selected),
//         });
//     }

//     getSelectedRows(){
//         this.setState({
//             SelectedList: this.state.List.filter((e)=>e.selected),
//         })
//     }


//     render(){
//     return ( 
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th scope="col"><input type="checkbox" checked={this.state.MasterChecked} id="mastercheck" onChange={(e)=>this.onMasterCheck(e)}/></th>
//                         <th scope="col">Rank</th>
//                         <th scope="col">Title</th>
//                         <th scope="col">Publisher</th>
//                         <th scope="col">Release Year</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {props.parentEntries.map((game)=>{
//                         return(
//                             <tr key={game.id}>
//                                 <th scope="row"><input type="checkbox" checked={game.selected} id="rowcheck{game.id}" onChange={(e)=>this.onGameCheck(e, game)}/></th>
//                                 <td>{game.rank}</td>
//                                 <td>{game.name}</td>
//                                 <td>{game.publisher}</td>
//                                 <td>{game.year}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//             <button onClick={()=>this.getSelectedRows()}>Get Selected Games {this.state.SelectedList.length}</button>
//             <div>
//                 <b>All Row Items:</b>
//                 <code>{JSON.stringify(this.state.List)}</code>
//             </div>
//             <div>
//                 <b>Selected Row Items (Click Button to Get):</b>
//                 <code>{JSON.stringify(this.state.SelectedList)}</code>
//             </div>
//         </div>
//      );
//     }
// }
 
// export default SelectTableComponent;