import React from 'react';
import { connect } from 'dva'
import { Radio } from 'antd';

class SelectSize extends React.Component {
    state = {
        value: '',
    };
    onChange = e => {
      
        this.setState({
            value: e.target.value,
        });
        const { dispatch } = this.props;
        // console.log('checked = ', checkedValues);
        const checkedSizes = e.target.value

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
        return (
            <div>
                尺码选择：
                <Radio.Group options={options} onChange={this.onChange} value={value} />

                <br />
                <br />

            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(SelectSize);