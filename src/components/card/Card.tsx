import * as React from "react"
import { Link } from "react-router-dom"
import cn from "classnames"
import styles from "./Card.module.scss"

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  scalesOnHover?: boolean;
  shrinkOnHover?: boolean;
  greyOnHover?: boolean;
  clickable?: boolean;
  backgroundImage?: string;
  backgroundColor?: string;
  onPush?: string;
  path?: string;
  flat?: boolean;
  padding?: string;
  purpleGradient?: boolean;
  blueGradient?: boolean;
  greenGradient?: boolean;
  pinkGradient?: boolean;
  noHover?: boolean;
  transparentHover?: boolean;
  transparent?: boolean;
  dark?: boolean;
  id?: string;
  onClickUrl?: (url: any) => void;
}

const Card = ({ 
  children,
  className,
  onClick,
  onPush,
  scalesOnHover,
  shrinkOnHover,
  greyOnHover,
  backgroundImage,
  backgroundColor,
  path,
  flat,
  padding,
  purpleGradient,
  blueGradient,
  greenGradient,
  pinkGradient,
  noHover,
  transparentHover,
  transparent,
  dark,
  id,
  onClickUrl,
}: CardProps) => {
    const memo = (
      <div
        id={id}
        className={cn(className, styles.Card, {
          [styles.ClickCard]: typeof onClick === `function`,
          [styles.ScaleCard]: scalesOnHover,
          [styles.ShrinkCard]: shrinkOnHover,
          [styles.GreyHover]: greyOnHover,
          [styles.noHover]: noHover,
          [styles.Flat]: flat,
          [styles.PurpleGradient]: purpleGradient,
          [styles.BlueGradient]: blueGradient,
          [styles.GreenGradient]: greenGradient,
          [styles.PinkGradient]: pinkGradient,
          [styles.TransparentHover]: transparentHover,
          [styles.Transparent]: transparent,
          [styles.Dark]: dark,
        })}
        onClick={onClick}
        style={{
          backgroundImage: backgroundImage,
          backgroundColor: backgroundColor,
          padding: padding,
        }}
      >
        {children}
      </div>
    )
    return path ? (
      <Link className={styles.Link} to={path}>
        {memo}
      </Link>
    ) : (
      memo
    )
  }

export default Card
