// src/components/NavLeft/index.js
import React from 'react'
import { Menu } from "antd";

import MenuConfig from '@/configs/menuConfig'
import "./index.less"

import { NavLink, HashRouter } from 'react-router-dom'  // 新增

import imgurl from "@/assets/demo/10@3x.png";
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {

    state = {
        menuTreeNode: null
    }
    UNSAFE_componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        });
    }


    componentDidMount() {

    }




    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}><NavLink to={'/admin' + item.key}>{item.title}</NavLink></Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="nl_logo">
                    <img src={imgurl} alt="" />
                    <h1>ε＝ε＝ε＝</h1>
                </div>
                <HashRouter>
                    <Menu theme="dark">
                        {this.state.menuTreeNode}
                    </Menu>
                </HashRouter>
            </div>
        )
    }

}
