import React from 'react';
import { connect } from 'dva'
import { Radio } from 'antd';

class SelectSize extends React.Component {
    state = {
        value: '',
    };
    onChange = e => {
        console.log('radio4 checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
        const { dispatch } = this.props;
        // console.log('checked = ', checkedValues);
        const checkedSizes = e.target.value
        // var checkedSizes = arguments[0];
        console.log('------------value', e.target.value)

        // console.log('checked ===== ', checkedSizes);
        dispatch({
            type: 'products/selectSize',
            payload: {
                checkedSizes
            },

        })
    }


    render() {
        // const { products } = this.props;
        const { value } = this.state;

        // const plainOptions = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
        const options = [
            { label: 'XS', value: 'XS' },
            { label: 'S', value: 'S' },
            { label: 'M', value: 'M' },
            { label: 'ML', value: 'ML' },
            { label: 'L', value: 'L' },
            { label: 'XL', value: 'XL' },
            { label: 'XXL', value: 'XXL' },
        ];

        // const newSize = [];
        // const sizeList = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
        // for (let i = 0; i < 7; i++) {
        //     newSize.push(<Tooltip title={sizeList[i]} color="white" key={(sizeList[i].id, i)}>
        //         <Button onClick={this.select} style={{ margin: 5 }}
        //             key={(sizeList[i].id, i)} shape="circle" size="large" >{sizeList[i]}</Button></Tooltip>);
        // }
        // const selectSizes = [];
        // for (let i = 0; i < 7; i++) {
        //     selectSizes.push(products.selectSizes[i])
        //     console.log('===products.selectSizes[i]===', products.selectSizes[i])
        //     console.log('===selectSizes===', selectSizes[i])
        // }
        // const sizeList = (products.selectSizes.length === 0 ? products.selectSizes : products.selectSizes).map(item => {
        //     return item

        //  })
        // var sizeList = '';//用于存放取出的数组的值

        // for(var i=0;i<products.selectSizes.length;i++){

        // sizeList=products.selectSizes[i];//数组的索引是从0开始的读
        // 
        // console.log('=====sizeList',sizeList);//把取出的值打印在控制台上

        // }
        //  console.log('.....sizelist',products.selectSizes)
        return (
            <div>
                尺码选择：
                <Radio.Group options={options} onChange={this.onChange} value={value} />

                {/* <Checkbox.Group
                        options={options}
                        checked={sizeList}

                        onChange={this.onChange}
                    /> */}

                <br />
                <br />

            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(SelectSize);