import './App.css';
import Navbar from './components/Navbar';

const dummyMenu = [
{
    menuNo: 1,
    menuName: "매출현황",
    parentMenuNo: null,
    displayYn: "Y",
    menuPath: "/tsalescalc",
    sortNo: 0,
    linkYn: "N",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 2,
    menuName: "공급사정산",
    parentMenuNo: null,
    displayYn: "Y",
    menuPath: "/trnpcalc",
    sortNo: 1,
    linkYn: "N",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 3,
    menuName: "분담금정산",
    parentMenuNo: null,
    displayYn: "Y",
    menuPath: "",
    sortNo: 2,
    linkYn: "N",
    useYn: "Y",
    readYn: "Y",
    writeYn: "N"
},
{
    menuNo: 4,
    menuName: "세금계산서",
    parentMenuNo: null,
    displayYn: "Y",
    menuPath: "/TaxInvoice",
    sortNo: 3,
    linkYn: "N",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 5,
    menuName: "지급요청",
    parentMenuNo: null,
    displayYn: "Y",
    menuPath: "/payrequest",
    sortNo: 4,
    linkYn: "N",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 6,
    menuName: "채널별정산",
    parentMenuNo: null,
    displayYn: "Y",
    menuPath: "/channelcalc",
    sortNo: 5,
    linkYn: "N",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 7,
    menuName: "PG승인내역",
    parentMenuNo: null,
    displayYn: "Y",
    menuPath: "/pgappr",
    sortNo: 6,
    linkYn: "N",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 8,
    menuName: "전환금관리",
    parentMenuNo: null,
    displayYn: "Y",
    menuPath: "/conversion",
    sortNo: 7,
    linkYn: "N",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 9,
    menuName: "관리자",
    parentMenuNo: null,
    displayYn: "Y",
    menuPath: "/menu9",
    sortNo: 8,
    linkYn: "N",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 10,
    menuName: "시스템 역할 관리",
    parentMenuNo: 9,
    displayYn: "Y",
    menuPath: "/sm/sysrole",
    sortNo: 9,
    linkYn: "Y",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 11,
    menuName: "사용자 역할 관리",
    parentMenuNo: 9,
    displayYn: "Y",
    menuPath: "/sm/userrole",
    sortNo: 10,
    linkYn: "Y",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 12,
    menuName: "코드관리",
    parentMenuNo: 9,
    displayYn: "Y",
    menuPath: "/sm/codeList",
    sortNo: 11,
    linkYn: "Y",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 13,
    menuName: "거래처관리",
    parentMenuNo: 9,
    displayYn: "Y",
    menuPath: "/sm/provider",
    sortNo: 12,
    linkYn: "Y",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 15,
    menuName: "스케줄관리",
    parentMenuNo: 9,
    displayYn: "Y",
    menuPath: "/sm/scheduler/record",
    sortNo: 14,
    linkYn: "Y",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 16,
    menuName: "배치관리",
    parentMenuNo: 9,
    displayYn: "Y",
    menuPath: "/sm/scheduler/settings",
    sortNo: 15,
    linkYn: "Y",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 21,
    menuName: "현대카드 선할인 정산",
    parentMenuNo: 3,
    displayYn: "Y",
    menuPath: "/contrib/hccdc",
    sortNo: 21,
    linkYn: "Y",
    useYn: "Y",
    readYn: "Y",
    writeYn: "Y"
},
{
    menuNo: 22,
    menuName: "현대카드 바우처 정산",
    parentMenuNo: 3,
    displayYn: "Y",
    menuPath: "/contrib/voucher",
    sortNo: 22,
    linkYn: "Y",
    useYn: "Y",
    readYn: "Y",
    writeYn: "Y"
},
{
    menuNo: 28,
    menuName: "Dummy",
    parentMenuNo: 16,
    displayYn: "Y",
    menuPath: "/Dummy",
    sortNo: 14,
    linkYn: "Y",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 29,
    menuName: "Dummy",
    parentMenuNo: 28,
    displayYn: "Y",
    menuPath: "/Dummy",
    sortNo: 14,
    linkYn: "Y",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
{
    menuNo: 30,
    menuName: "Dummy",
    parentMenuNo: 28,
    displayYn: "Y",
    menuPath: "/Dummy",
    sortNo: 14,
    linkYn: "Y",
    useYn: "Y",
    readYn: "N",
    writeYn: "Y"
},
]

function App() {
  return (
    <div className="App">
      <Navbar menu={dummyMenu} />
    </div>
  );
}

export default App;
