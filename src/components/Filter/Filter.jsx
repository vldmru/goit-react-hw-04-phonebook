import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
    return (
        <Label>
            Find contacts by name
            <Input 
                type="text"
                name="filter"
                value={filter}
                onChange={onChange} />
        </Label>
    );
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}