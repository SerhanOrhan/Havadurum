import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function DetailCards(props) {
    const { name, date, location, minTemprature, maxTemprature, isDetail, icon, withLink } = props;
    return (
        <Container>
            <div className="regular-list-card"  >

                
                    {isDetail && <div className="title">
                        <h2>{name}</h2>
                    </div>}
                    <div>
                        <Link to={withLink ? '/detail/' + name : '#'}>
                            <Table striped bordered hover >
                                <thead className="table-header">
                                    <tr>
                                        <th >{location ? "KONUM" : "TARİH"}  </th>
                                        <th >HADİSE</th>
                                        <th >EN DÜŞÜK SICAKLIK</th>
                                        <th >EN YÜKSEK SICAKLIK </th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    <tr>
                                        <td>{location ? location : date}</td>
                                        <td>
                                            <div className="regular-card-thumbnail">
                                                <img src={'/icons/' + icon + '.svg'} alt="sunny" width="30"
                                                    height="30" />
                                            </div>
                                        </td>
                                        <td>{minTemprature} °</td>
                                        <td>{maxTemprature} °</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Link>
                    </div>
            </div>
        </Container>

    )
}

export default DetailCards;
