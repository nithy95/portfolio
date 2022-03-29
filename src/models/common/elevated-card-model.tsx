export default interface ElevatedCardProps {
  title: React.ReactChild | React.ReactFragment | React.ReactPortal;
  subtitle?: React.ReactChild | React.ReactFragment | React.ReactPortal;
  icon: string;
  iconStyle?: {};
}
