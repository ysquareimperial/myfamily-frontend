import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Media from './MediaTab';
import Posts from './PostsTab';
import PostsTab from './PostsTab';
import Downloads from './Downloads';

export default function ProfileTab() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [activeTab, setActiveTab] = useState('0');
    const toggle2 = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <div className="row" >
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '0' })}
                                onClick={() => { toggle2('0'); }}
                            >
                                Posts
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '4' })}
                                onClick={() => { toggle2('4'); }}
                            >
                                Media
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '5' })}
                                onClick={() => { toggle2('5'); }}
                            >
                                Shares
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '6' })}
                                onClick={() => { toggle2('6'); }}
                            >
                                Downloads
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="0">
                            <Row>
                                <Col sm="12">
                                    <PostsTab />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12">
                                    <Media />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="5">
                            <Row>
                                <Col md="12">
                                    <Posts />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="6">
                            <Row>
                                <Col md="12">
                                  <Downloads/>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}