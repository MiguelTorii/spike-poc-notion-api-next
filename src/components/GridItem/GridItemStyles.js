/* eslint-disable import/no-anonymous-default-export */

export default {
  gridItem: {
    padding: 1.5,
    backgroundColor: (theme) => theme.palette.lightBlack,
    borderRadius: "3px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {
    position: "relative",
    height: 170,
  },
  tag: {
    marginTop: 1.75,
    padding: (theme) => theme.spacing(0.5, 1),
    backgroundColor: (theme) => theme.palette.darkGray,
    borderRadius: "6px",
    width: "fit-content",
  },
  description: {
    overflow: "hidden",
    position: "relative",
    maxHeight: 60,
    textAlign: "justify",
    paddingRight: "1em",
    "&:before": {
      content: '"..."',
      position: "absolute",
      right: 0,
      bottom: 0,
    },
    "&:after": {
      content: '""',
      position: "absolute",
      right: 0,
      width: "1em",
      height: "1em",
      marginTop: "0.2em",
      background: (theme) => theme.palette.lightBlack,
    },
  },
};
