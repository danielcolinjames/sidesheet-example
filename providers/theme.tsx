import { createTheme } from "@mui/material";

export const theme = createTheme(
    {
        "breakpoints": {
          "values": {
            "xs": 0,
            "sm": 640,
            "md": 942,
            "lg": 1024,
            "xl": 1280
          }
        },
        "components": {
          "MuiAccordion": {
            "styleOverrides": {
              "root": {
                "backgroundColor": "transparent",
                "borderRadius": 0,
                "height": "100%",
                "overflow": "auto",
                "paddingTop": "24px",
                "::before": {
                  "display": "none"
                },
                "&:not(:first-of-type)": {
                  "borderTop": "1px solid #CCCCCC"
                },
                ":last-of-type": {
                  "borderRadius": 0
                }
              }
            }
          },
          "MuiInputLabel": {
            "styleOverrides": {
              "root": {}
            }
          },
          "MuiAccordionSummary": {
            "styleOverrides": {
              "content": {
                "margin": "0",
                "maxWidth": "calc(100% - 30px)"
              },
              "expandIconWrapper": {
                "color": "#FFF",
                "fontWeight": 400,
                "fontSize": 24,
                "overflow": "hidden"
              },
              "root": {
                "justifyContent": "space-between",
                "padding": "0"
              }
            }
          },
          "MuiAccordionDetails": {
            "styleOverrides": {
              "root": {
                "color": "#CCCCCC",
                "marginTop": "-4px",
                "padding": "0 0 32px",
                "h4": {
                  "margin": "16px 0 8px",
                  "&:first-of-type": {
                    "marginTop": 1
                  }
                },
                "p": {
                  "margin": 0
                }
              }
            }
          },
          "MuiButton": {
            "styleOverrides": {
              "root": {
                "fontFamily": "'__Inter_165471', '__Inter_Fallback_165471', sans-serif",
                "fontSize": "16px",
                "fontWeight": 500,
                "textTransform": "none",
                "width": "fit-content",
                "boxShadow": "none",
                "&.Mui-disabled": {
                  "color": {
                    "main": "#FFF"
                  },
                  "opacity": 0.8,
                  "borderColor": {
                    "main": "#FFF"
                  }
                },
                ":hover": {
                  "borderWidth": "2px",
                  "opacity": "0.9",
                  "boxShadow": "none"
                },
                ":active": {
                  "boxShadow": "none"
                }
              },
              "contained": {
                "borderRadius": "50px",
                "padding": "8px 16px",
                "&.MuiButton-sizeSmall": {
                  "height": "32px",
                  "lineHeight": "12px"
                },
                "&.MuiButton-sizeMedium": {
                  "height": "48px"
                },
                "&.MuiButton-sizeLarge ": {
                  "height": "56px"
                }
              },
              "outlined": {
                "borderRadius": "50px",
                "borderWidth": "2px",
                "padding": "8px 16px",
                "&.MuiButton-sizeSmall": {
                  "height": "32px"
                },
                "&.MuiButton-sizeMedium": {
                  "height": "48px"
                },
                "&.MuiButton-sizeLarge ": {
                  "height": "56px"
                }
              },
              "text": {
                "borderRadius": 0,
                "padding": 0
              },
              "fullWidth": {
                "width": "100%"
              }
            }
          },
          "MuiCollapse": {
            "styleOverrides": {
              "root": {
                "paddingTop": "8px"
              }
            }
          },
          "MuiTab": {
            "styleOverrides": {
              "root": {
                "textTransform": "capitalize",
                "minWidth": 0,
                "padding": "12px 0",
                "marginRight": "16px",
                "textAlign": "left",
                "color": "#FFF"
              }
            }
          },
          "MuiTableSortLabel": {
            "styleOverrides": {
              "icon": {
                "opacity": "0.2"
              }
            }
          },
          "MuiIconButton": {
            "styleOverrides": {
              "root": {
                ":hover": {
                  "opacity": "0.9",
                  "backgroundColor": "transparent"
                },
                "& img": {
                  "width": "auto"
                }
              }
            }
          },
          "MuiInputBase": {
            "styleOverrides": {
              "root": {
                "&.Mui-error": {
                  "color": "#FF0734"
                }
              }
            }
          },
          "MuiOutlinedInput": {
            "styleOverrides": {
              "root": {
                "borderRadius": "8px",
                "&.access-code": {
                  "borderRadius": "50px"
                }
              }
            }
          },
          "MuiTextField": {
            "styleOverrides": {
              "root": {
                "& input.code": {
                  "caretColor": "transparent",
                  "fontSize": "20px",
                  "textAlign": "center"
                },
                "&.empty": {
                  "paddingBottom": "10px",
                  "& input": {
                    "height": "10px"
                  }
                }
              }
            }
          },
          "MuiCard": {
            "styleOverrides": {
              "root": {
                "borderRadius": "16px",
                "borderColor": "#CCCCCC"
              }
            }
          },
          "MuiDrawer": {
            "styleOverrides": {
              "paper": {
                "padding": "24px",
                "borderTopRightRadius": "24px",
                "borderTopLeftRadius": "24px",
                "transition": "300ms height",
                "maxHeight": "95%",
                "img.restaurant-logo": {
                  "filter": "drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.2))"
                }
              }
            }
          },
          "MuiDivider": {
            "styleOverrides": {
              "root": {
                "borderColor": "#CCCCCC"
              }
            }
          },
          "MuiDialogActions": {
            "styleOverrides": {
              "root": {
                "padding": "16px"
              }
            }
          }
        },
        "palette": {
          "divider": "#9A9A9A",
          "error": {
            "main": "#FF0734"
          },
          "grey": {
            "100": "#757575",
            "200": "#E6E6E6",
            "300": "#CCCCCC",
            "400": "#333333",
            "500": "#666666",
            "600": "#1D1D1D",
            "700": "#999"
          },
          "action": {
            "active": "#147EFB"
          },
          "mode": "dark",
          "background": {
            "paper": "#000"
          },
          "primary": {
            "main": "#FFF"
          },
          "secondary": {
            "main": "#666"
          },
          "text": {
            "primary": "#FFF",
            "secondary": "#666",
            "disabled": "#777171"
          }
        },
        "typography": {
          "fontFamily": "'__Inter_165471', '__Inter_Fallback_165471'",
          "h1": {
            "fontSize": 56,
            "lineHeight": "68px !important",
            "fontWeight": 600
          },
          "h2": {
            "fontSize": 26,
            "lineHeight": "34px !important",
            "fontWeight": 600
          },
          "h3": {
            "fontSize": 18,
            "lineHeight": "22px !important",
            "fontWeight": 500
          },
          "h4": {
            "fontSize": 16,
            "fontWeight": 500,
            "lineHeight": "22px !important"
          },
          "h5": {
            "fontFamily": "'__Source_Code_Pro_3e9d4b', '__Source_Code_Pro_Fallback_3e9d4b'",
            "fontSize": 14,
            "fontWeight": 600,
            "lineHeight": "20px !important"
          },
          "h6": {
            "fontSize": 12,
            "fontWeight": 500,
            "lineHeight": "26px !important"
          },
          "body1": {
            "fontSize": 14,
            "lineHeight": "20px !important",
            "fontWeight": 400
          },
          "body2": {
            "fontSize": 12,
            "lineHeight": "16px !important",
            "fontWeight": 500
          },
          "subtitle1": {
            "fontFamily": "'__Source_Code_Pro_3e9d4b', '__Source_Code_Pro_Fallback_3e9d4b'",
            "fontSize": 10,
            "fontWeight": 500,
            "lineHeight": "10px"
          },
          "subtitle2": {
            "fontFamily": "'__Source_Code_Pro_3e9d4b', '__Source_Code_Pro_Fallback_3e9d4b'",
            "fontSize": 12,
            "fontWeight": 400,
            "lineHeight": "14px"
          }
        }
      })