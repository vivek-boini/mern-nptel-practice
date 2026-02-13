import React from "react";
import type { Asset } from "../types/Asset";

interface AssetEditorProps{
    onUpdate: (asset: Asset)=>void;
}

interface AssetEditorState{
    name: string;
    symbol: string;
    value: string;
    change: string;
}

class AssetEditor extends React.Component<AssetEditorProps,AssetEditorState>{
    state: AssetEditorState={
        name: "",
        symbol: "",
        value: "",
        change: ""
    }

    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({[e.target.name]:e.target.value} as Pick<AssetEditorState, keyof AssetEditorState>);
    }

    handleSubmit=(e :React.FormEvent)=>{
        e.preventDefault();

        this.props.onUpdate({
            name: this.state.name,
            symbol: this.state.symbol,
            value: Number(this.state.value),
            change: Number(this.state.change)
        });
        this.setState({ name: "", symbol: "", value: "", change: "" });
    }
    render() {
        return (
        <>
            <h1>Edit Assets</h1>
            <form onSubmit={this.handleSubmit}>
                Name:
                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} required/>
                <br></br>
                Symbol:
                <input name="symbol" type="text" value={this.state.symbol} onChange={this.handleChange} required/>
                <br></br>
                Value:
                <input name="value" type="number" value={this.state.value} onChange={this.handleChange} required/>
                <br></br>
                Change:
                <input name="change" type="number" value={this.state.change} onChange={this.handleChange} required/>
                <br></br>
                <button type="submit">Update Asset</button>
            </form>
        </>
        );
    }
}

export default AssetEditor;