import Sum from './components/Sum';
import Products from './components/Products';
import PetList from './components/PetList';
import Button from './components/Button';

const data = {pets: ['cat', 'dog', 'bird']};
ReactDOM.render(
    <React.Fragment>
        <Button label={'Click Me!'} />
        <Sum a={1} b={3} />
        <PetList data={data} />
    </React.Fragment> , document.getElementById("root")
);