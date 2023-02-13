import styled from 'styled-components'

const ItemWrapper = styled.div`
    width: ${props => props.itemWidth};
    padding: 0 8px 12px;
    .cover {
        position: relative;
        padding: 66.66% 0 0;
        border-radius: 3px;
        overflow: hidden;
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    .desc {
        margin: 10px 0 5px;
        font-size: 12px;
        font-weight: 700;
        color: ${props => props.verifyColor};
    }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primary};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
        margin-right: -2px;
    }
  }
`

export default ItemWrapper