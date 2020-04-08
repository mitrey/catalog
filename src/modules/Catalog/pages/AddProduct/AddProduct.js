import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addProduct } from '../../redux/operations';
import firebase from '../../../../firebase';

const AddProduct = ({ addProduct }) => {
    const { countryId } = useParams();
    const userId = firebase.auth().currentUser.uid;

    const handleAdd = data => {
        addProduct(countryId, {
            title: 'iPhone XR Coral',
            price: 10000,
            userId,
        });
    };

    return (
        <div>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default connect(null, {
    addProduct,
})(AddProduct);
