 import { Link , Text} from "@chakra-ui/react";
 
 export const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text style={{color:"black"}} display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};
