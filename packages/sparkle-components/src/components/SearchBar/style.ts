import styled from "styled-components";
import { SearchBarProps } from ".";
import variables from "../../styles/variables";

const themes = {
    light: {
        color: variables.colors.outerSpace,
        background: '#FFFFFF',
        outline: variables.colors.outerSpace
    },
    jade: {
        color: variables.colors.outerSpace,
        background: '#FFFFFF',
        outline: variables.colors.jade
    }
}

export const SearchBarContainer = styled.div<SearchBarProps>` 
    display: flex;
    font-family: var(--primary-font);
    height: 2.3rem;
    margin-bottom: 2rem;
    position: relative;
    width: 100%;

    input {
        background-color: ${(props: SearchBarProps) => 
            props.theme ?
            themes[props.theme].background :
            themes.light.background
        };
        border: none;
        border-radius: 15px;
        box-shadow: 0 0 0 1px ${(props: SearchBarProps) => 
            props.$bordered && props.theme ? 
            themes[props.theme].outline :
            'rgba(0,0,0,0)'
        };
        color: ${(props: SearchBarProps) => 
            props.theme ? 
            themes[props.theme].color :
            themes.light.color
        };
        font-family: var(--text-font);
        padding: 0 3rem 0 1rem;
        outline: none;
        width: 100%;
        transition: box-shadow .2s ease-in-out;

        &::placeholder {
            color: ${(props: SearchBarProps) => 
                props.theme ? 
                themes[props.theme].color : 
                themes.light.color
            };
        }

        &:focus {
            box-shadow: 0 0 0 2px ${(props: SearchBarProps) => 
                props.theme ? 
                themes[props.theme].outline :
                themes.light.outline
            };
        }
    }

    button {
        background-color: transparent;
        border: none;
        top: .5rem;
        right: .5rem;
        position: absolute;
    }

    
`;