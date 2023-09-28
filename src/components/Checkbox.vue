<template>
    <!-- <div class="checkbox" :class="'checkbox--'+ color, style === 'radio'?'checkbox--radio':''"> -->
    <div class="checkbox" :class="{['checkbox--' + color] :color,'checkbox--radio': style === 'radio'}">
        <input :type="type" :id="nameId" :checked="checked" :name="radioName">
        <label :for="nameId">
            <span>
                <svg viewBox="0 0 512 512" width="14"><path fill="#fff" d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
            </span>
            <p class="mb0" v-if="text">{{text}}</p>
        </label>
    </div>
</template>
<script>
export default {
    name:"Checkbox",
    props: {
        type: {
            type: String,
            required: false,
            default: 'checkbox',
        },
        text: {
            type: String,
            required: false,
        },
        color: {
            type: String,
            required: false,
        },
        nameId: {
            type: String,
            required: false,
        },
        radioName: {
            type: String,
            required: false,
        },
        checked: {
            type: Boolean,
            required: false,
        },
        style: {
            type: String,
            required: false,
        }
    }
}
</script>
<style lang="scss" scoped>

    .checkbox {
        input {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            z-index: -1;
        }

        label {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;

            span {
                width: 20px;
                height: 20px;
                border-radius: 3px;
                border: 2px solid #A3AAAB;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all .3s ease;
            }

            svg {
                visibility: hidden;
                opacity: 0;
                transition: all .3s ease;
            }
        }

        input:checked + label {

            span {
                background-color: #088395;
                border-color: #088395;


                svg {
                    visibility: visible;
                    opacity: 1;
                }
            }
        }

        &.checkbox--gray {
            span, input:checked + label span {
                background-color: #BEBEC6;
                border-color: #BEBEC6;
            }
        }

        &.checkbox--blue {
            span, input:checked + label span {
                background-color: #5553E1;
                border-color: #5553E1;
            }
        }

        &.checkbox--green {
            span, input:checked + label span {
                background-color: #A3D139;
                border-color: #A3D139;
            }
        }
        &.checkbox--red {
            span, input:checked + label span {
                background-color: #E15353;
                border-color: #E15353;
            }
        }
        &.checkbox--black {
            span, input:checked + label span {
                background-color: #141C1D;
                border-color: #141C1D;
            }
        }
        &.checkbox--orange {
            span, input:checked + label span {
                background-color: #E1A053;
                border-color: #E1A053;
            }
        }
        &.checkbox--yellow {
            span, input:checked + label span {
                background-color: #E1D353;
                border-color: #E1D353;
            }
        }

        &.checkbox--radio {
            label {
                span {
                    border-radius: 50%;
                    position: relative;


                    &:before {
                        position: absolute;
                        left: 2px;
                        top: 2px;
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        background-color: #088395;
                        transition: all .3s ease;
                        visibility: hidden;
                        opacity: 0;
                        content:"";
                    }

                    svg {
                        display: none;
                    }
                }
            }

            input:checked + label {
                span {
                    background-color: white;
                    &:before {
                        visibility: visible;
                        opacity: 1;
                    }
                }
            }


            p {
                font-size: 20px; 
                font-weight: 700;
                line-height: 24px;
            }
        }
    }
</style>