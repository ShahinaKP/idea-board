import styled from 'styled-components';

const Styled = styled.div`
    width: calc(100% - 10px);
    position: relative;

    .react-grid-layout {
        background: #eee;
    }

    .layoutJSON {
        background: #ddd;
        border: 1px solid black;
        margin-top: 10px;
        padding: 10px;
    }

    .columns {
        columns: 120px;
    }

    .react-grid-item {
        box-sizing: border-box;
    }

    .react-grid-item:not(.react-grid-placeholder) {
        background: #ccc;
        border: 1px solid black;
    }

    .react-grid-item.resizing {
        opacity: 0.9;
    }

    .react-grid-item.static {
        background: #cce;
    }

    .react-grid-item .text-title {
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        margin-top: 20px;
        display: block;
        padding: 0 5px;
    }

    .react-grid-item .text-body {
      font-size: 18px;
      text-align: left;
      margin-top: 20px;
      display: block;
      padding: 0 5px;
  }

      .react-grid-item .minMax {
        font-size: 12px;
      }
      .react-grid-item .add {
        cursor: pointer;
      }
      .react-grid-dragHandleExample {
        cursor: move; /* fallback if grab cursor is unsupported */
        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;
      }
      li b {
        font-size: 19px;
        line-height: 14px;
      }
      
      .toolbox {
        background-color: #dfd;
        width: 100%;
        height: 120px;
        overflow: scroll;
      }
      
      .hide-button {
        cursor: pointer;
        position: absolute;
        font-size: 20px;
        top: 0px;
        right: 5px;
      }
      
      .toolbox__title {
        font-size: 24px;
        margin-bottom: 5px;
      }
      .toolbox__items {
        display: block;
      }
      .toolbox__items__item {
        display: inline-block;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        padding: 10px;
        margin: 5px;
        border: 1px solid black;
        background-color: #ddd;
      }
`;

export { Styled as default };