// import { Button } from "bootstrap"
import { useState } from "react"
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"

const DashBoard = () => {
    // const arr = [1,2,3,4,5,6,7,8,9,10, 11,12,13,14,15,16,16]
    const [arr1, setArr1] = useState([
        {
            name: 'vikash',
            sex : 'male',
            phoneNum : 6393489379
        }, {
            name: 'rohit',
            sex : 'male',
            phoneNum : 6393489379
        }, {
            name: 'rahul',
            sex : 'male',
            phoneNum : 6393489379
        }, {
            name: 'hulra',
            sex : 'male',
            phoneNum : 6393489379
        }, {
            name: 'vinay',
            sex : 'male',
            phoneNum : 6393489379
        }, {
            name: 'hsakiv',
            sex : 'male',
            phoneNum : 6393489379
        }, {
            name: 'sakshi',
            sex : 'female',
            phoneNum : 6393489379
        }, {
            name: 'moonmoon',
            sex : 'male',
            phoneNum : 6393489379
        } 
    ])
    const [isShow, setIsShow] = useState(false)

    const addFunction = () => {
        setIsShow(true)
        const temp = arr1
        temp.push({
            name : '',
            sex: "",
            phoneNum : 0
        })
        setArr1(temp)
        setTimeout(() => {
            setIsShow(false)
        }, 1000);
    }

    const deleteFunction = (data) => {
        setIsShow(true)
        const idx = arr1.indexOf(data)
        arr1.splice(idx, 1)
        setArr1(arr1)
        setTimeout(() => {
            setIsShow(false)
        }, 1000)
    }

    return (
        <>
        <h1> DashBoard page</h1>
        {isShow ? '' : <Row>
            {arr1.map((item, index) => {
                return (
                    <Col md='4' className="mt-3">
                    <Card>
                        <CardHeader>Its header - {index}</CardHeader>
                        <CardBody>
                            <span> name - {item.name}</span>
                            <div>
                                <span>
                                    gender - {item.sex}
                                </span>
                            </div>
                            <div>
                                <span>
                                    contact - {item.phoneNum}
                                </span>
                            </div>
                            <div>
                                <span className='btn btn-primary' color='primary' onClick={addFunction} >add</span>
                                <span className='btn btn-primary' color='primary' onClick={() => { deleteFunction(item) }} >delete</span>
                            </div>

                        </CardBody>
                    </Card>
                    </Col>
                )
            })}
        </Row>}
        </>
    )
}

export default DashBoard