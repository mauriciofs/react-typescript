import * as React from 'react';
import * as enzyme from 'enzyme';
import * as sinon from 'sinon';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name='Daniel' />);
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1}/>);
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={0} />);
    }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
    }).toThrow();
});

it('Increment enthusiasm', () => {
    const increment = sinon.spy();
    const wrapper = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1} onIncrement={increment} />);
    wrapper.find('.increment').simulate('click');
    expect(increment.calledOnce).toBe(true);
});

it('Decrement enthusiasm', () => {
    const decrement = sinon.spy();
    const wrapper = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1} onDecrement={decrement} />);
    wrapper.find('.decrement').simulate('click');
    expect(decrement.calledOnce).toBe(true);
});