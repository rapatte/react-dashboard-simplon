import React, { useEffect, useState } from 'react';
import { promoService } from '../../services';
import TableItem from './TableItem';
import { AuthContext } from '../../store';

export default function DashboardScreen() {
    const [promos, setPromos] = useState(null);
    const getPromosdata = async () => {
        const response = await promoService.getAll()
        setPromos(response.data)
    }
    useEffect(() => {
        try {
            getPromosdata();
            console.log(promos)         
        }
        catch (error) {
            console.log(error);
        }
    }, [])


    return (
            <div className='container'>
                <div className='dashboard'>
                    <h1 className='dashboard-title'>Dashboard</h1>
                    <h2 className='dashboard-name'>Simplon</h2>
                    {promos !== null ? (
                        <table className='table'>
                            <thead className='table-head'>
                                <tr>
                                    <th>Apprenants</th>
                                    <th>Formateurs</th>
                                    <th>Promos</th>
                                    <th>Salles</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Object.values(promos).map(
                                    ({
                                        appVersion,
                                        id,
                                        label,
                                        lastTimeActive,
                                    }) => (
                                        <TableItem
                                            key={`store-id-${id}`}
                                            {...{
                                                appVersion,
                                                id,
                                                label,
                                                lastTimeActive,
                                            }}
                                        />
                                    ),
                                )}
                            </tbody>
                        </table>
                    ) : (
                        <p>Chargement</p>
                    )}
                </div>
            </div>
    );}
