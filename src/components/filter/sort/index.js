import React from 'react';
import { connect } from 'dva';
import { Select } from 'antd';

const { Option } = Select;

class Sort extends React.Component {
    handleChange = (value) => {
      const { dispatch } = this.props;
      console.log('value-----', value.value);
      const sort = value.value;
      dispatch({
        type: 'products/priceSort',
        payload: {
          sort,
        },

      });
      // console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    }

    render() {
      // const plainOptions = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

      return (
        <div>
          价格排序：
          <Select
            labelInValue
            defaultValue={{ value: 'complex' }}
            style={{ width: 120 }}
            onChange={this.handleChange}
          >
            <Option value="complex">综合排序</Option>
            <Option value="ASC">价格升序</Option>
            <Option value="DESC">价格降序</Option>
          </Select>,
        </div>
      );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Sort);
