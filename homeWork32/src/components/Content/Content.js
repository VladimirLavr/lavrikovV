import {Component} from "react";

import {Categories} from "../Categories/Categories";
import {Masters} from "../Masters/Masters";
import {ListCategories} from "../ListCategoreis/ListCategoreis";
import {ListContent} from "../ListContent/ListContent";
import {ListMasters} from "../ListMasters/ListMasters";

import {CostSideBar} from "../CostSideBar/CostSideBar";

import './Content.css';
import {getCategories, getCategoriesListServices, getMasters} from "../../Api/getList";
import {Header} from "../Header/Header";


export class Content extends Component {


    state = {
        isVisibleListCategories: false,
        isVisibleListMasters: false,
        isId: null,
        Masters: null,
        choseMaster: null,
        Categories: null,
        CategoriesListServices: null,
        allChoseItemsOrder: [],
        ChoseItemsOrder: []


    }

    showListCategories = () => {

        this.setState({
            isVisibleListCategories: !this.state.isVisibleListCategories,
            isVisibleListMasters: false
        });

    }


    showListMasters = () => {

        this.setState({
            isVisibleListMasters: !this.state.isVisibleListMasters,
            isVisibleListCategories: false
        });

    }


    getId = (items) => {
        this.setState({isId: items.id});
    }


    mastersToState = (json) => {
        this.setState({Masters: json[0].Masters})
    }

    pushNewMasterToState = (useValue) => {

        let id = this.state.Masters.length + 1


        let newMaster = Object.values(useValue)

        this.setState(state => ({
                ...state,
                Masters: [...state.Masters, {id: id, name: newMaster}]
            }
        ))
    }

    delMasterFromState = (item) => {
        if (this.state.Masters.some(items => items.name === item.name)) {
            this.setState(state => ({
                ...state, Masters: [...state.Masters.filter(master => master.name !== item.name)]
            }))
        }
    }


    categoriesToState = (json) => {
        this.setState({Categories: json[0].Categories})
    }

    categoriesListServicesToState = (json) => {
        this.setState({CategoriesListServices: json[0].CategoriesListServices.map(items => items)})
    }



    addChoseItemsToOrder = (items) => {

        if (!this.state.allChoseItemsOrder.some(item => item.id === items.id)) {
            this.setState(state => ({
                    ...state,
                    allChoseItemsOrder: [...state.allChoseItemsOrder, items]
                }
            ))
        }

    }


    deleteItemOrderFromCart = (item) => {

        if (this.state.allChoseItemsOrder.some(items => item.id === items.id)) {
            this.setState(state => ({
                    ...state,
                    allChoseItemsOrder: [...state.allChoseItemsOrder.filter(delItem => delItem !== item)]
                }
            ))
        }
    }

    clearMasterFromCart = () => {
        this.setState(state => ({
                ...state,
                choseMaster: null
            }
        ))
    }

    clearAllFromCart = () => {
        this.setState(state => ({
                ...state,
                allChoseItemsOrder: []
            }
        ))
        this.clearMasterFromCart()
    }


    addChoseMasterToOrder = (item) => {
        this.setState({choseMaster: item})
    }


    componentDidMount() {
        getMasters(this.mastersToState)

        getCategories(this.categoriesToState)

        getCategoriesListServices(this.categoriesListServicesToState)


    }


    render() {
        return (

            <>
                <Header/>
                <div className="content">
                    <div className="wrapper">
                        <div onClick={() => this.showListCategories()}>
                            <Categories/>
                        </div>
                        <div onClick={() => this.showListMasters()}>
                            <Masters/>
                        </div>
                    </div>

                    <div className='list__wrapper'>

                        <ListCategories sendId={this.state.isId} getId={this.getId}
                                        isVisible={this.state.isVisibleListCategories}
                                        Categories={this.state.Categories}/>

                        <ListContent addChoseItemsToOrder={this.addChoseItemsToOrder} sendId={this.state.isId}
                                     CategoriesListServices={this.state.CategoriesListServices}
                                     isVisible={this.state.isVisibleListCategories}/>


                        <ListMasters delMasterFromState={this.delMasterFromState}
                                     addChoseMasterToOrder={this.addChoseMasterToOrder}
                                     pushNewMasterToState={this.pushNewMasterToState} Masters={this.state.Masters}
                                     isVisibleMasters={this.state.isVisibleListMasters}
                                     disableVisibleCategories={this.state.isVisibleListCategories}/>


                        <CostSideBar  clearMasterFromCart={this.clearMasterFromCart} clearAllFromCart={this.clearAllFromCart} choseMaster={this.state.choseMaster}
                                     deleteItemOrderFromCart={this.deleteItemOrderFromCart}
                                     allChoseItemsOrder={this.state.allChoseItemsOrder}
                                     isVisibleMasters={this.state.isVisibleListMasters}
                                     isVisibleCategories={this.state.isVisibleListCategories}/>

                    </div>

                </div></>
        )
    }
}

