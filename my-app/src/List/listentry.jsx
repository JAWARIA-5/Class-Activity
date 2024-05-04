import React, { Component } from 'react';
import './listentry.css';

class ListEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: this.props.book.bookName,
            publishingDate: this.props.book.publishingDate,
            description: this.props.book.description,
            Status: this.props.book.Status // Capitalize "Status"
        };
    }
    render() {
        return (
            <div className="container">
                <table>
                <colgroup>
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '55%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="name">{this.state.bookName}</td>
                            <td className="date">{this.state.publishingDate}</td>
                            <td className="description">{this.state.description}</td>
                            {this.state.Status === 1 ? <td>Not Available</td> : <td>Available</td>}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListEntry;
