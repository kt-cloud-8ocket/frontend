export function TermsPage() {
  return (
    <div className="space-y-12">
      {/* 히어로 */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">이용약관</h1>
        <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
          8ocket 서비스 이용에 관한 약관입니다
        </p>
      </section>

      {/* 본문 */}
      <section className="max-w-4xl mx-auto space-y-8">
        <article className="space-y-4">
          <h2 className="text-base font-bold">제1조 (목적)</h2>
          <p className="text-muted-foreground leading-relaxed">
            이 약관은 8ocket(이하 "회사")이 운영하는 서비스(이하 "서비스")에서 제공하는 서비스와 이를 이용하는 회원의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제2조 (정의)</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>"서비스"란 회사가 제공하는 재화 또는 용역의 거래를 위한 온라인 플랫폼을 말합니다.</li>
            <li>"이용자"란 서비스에 접속하여 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
            <li>"회원"이란 서비스에 개인정보를 제공하여 회원등록을 한 자로서, 서비스의 정보를 지속적으로 제공받으며 서비스를 계속 이용할 수 있는 자를 말합니다.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제3조 (약관의 명시와 개정)</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>회사는 이 약관의 내용과 상호, 대표자 성명, 영업소 소재지 주소, 연락처 등을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.</li>
            <li>회사는 약관을 개정할 경우 적용일자 및 개정사유를 명시하여 현행 약관과 함께 서비스 초기화면에 그 적용일자 7일 이전부터 공지합니다.</li>
            <li>이용자에게 불리한 약관 개정의 경우 최소 30일 이상의 사전 유예기간을 두고 공지합니다.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제4조 (서비스의 제공 및 변경)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 다음과 같은 업무를 수행합니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>재화 또는 용역에 대한 정보 제공 및 구매계약의 체결</li>
            <li>구매계약이 체결된 재화 또는 용역의 배송</li>
            <li>기타 회사가 정하는 업무</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            서비스 내용이 변경되는 경우 회사는 즉시 그 사유와 변경 내용을 이용자에게 공지합니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제5조 (서비스의 중단)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제6조 (회원가입)</h2>
          <p className="text-muted-foreground leading-relaxed">
            이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다. 회사는 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>가입신청자가 이전에 회원자격을 상실한 적이 있는 경우</li>
            <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
            <li>기타 회원으로 등록하는 것이 서비스 운영에 현저히 지장이 있다고 판단되는 경우</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제7조 (회원 탈퇴 및 자격 상실)</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.</li>
            <li>회원이 허위정보 등록, 타인의 서비스 이용 방해, 불법행위 등을 한 경우 회사는 회원자격을 제한 또는 상실시킬 수 있습니다.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제8조 (회원에 대한 통지)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사가 회원에 대한 통지를 하는 경우 회원이 회사에 등록한 이메일 주소로 할 수 있습니다. 불특정 다수 회원에 대한 통지의 경우 1주일 이상 서비스 게시판에 게시함으로써 개별 통지에 갈음할 수 있습니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제9조 (구매신청)</h2>
          <p className="text-muted-foreground leading-relaxed">
            서비스 이용자는 다음 또는 이와 유사한 방법에 의하여 구매를 신청합니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>재화 또는 용역의 검색 및 선택</li>
            <li>성명, 주소, 전화번호, 이메일주소 등의 입력</li>
            <li>약관내용, 청약철회권이 제한되는 서비스에 대한 확인</li>
            <li>결제방법의 선택</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제10조 (계약의 성립)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 다음 각 호에 해당하면 승낙하지 않을 수 있습니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>신청 내용에 허위, 기재누락, 오기가 있는 경우</li>
            <li>기타 구매신청에 승낙하는 것이 서비스 기술상 현저히 지장이 있다고 판단하는 경우</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제11조 (지급방법)</h2>
          <p className="text-muted-foreground leading-relaxed">
            서비스에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각 호의 방법 중 가능한 방법으로 할 수 있습니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>계좌이체</li>
            <li>신용카드 결제</li>
            <li>무통장입금</li>
            <li>전자화폐에 의한 결제</li>
            <li>기타 회사가 정한 결제수단</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제12조 (수신확인통지·구매신청 변경 및 취소)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다. 수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우 배송 전 구매신청 변경 및 취소를 요청할 수 있습니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제13조 (재화 등의 공급)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 이용자와 재화 등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제14조 (환급)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 이용자가 구매신청한 재화 등이 품절 등의 사유로 인도 또는 제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게 통지하고, 사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 3영업일 이내에 환급합니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제15조 (청약철회)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사와 재화 등의 구매에 관한 계약을 체결한 이용자는 수신확인의 통지를 받은 날부터 7일 이내에 청약의 철회를 할 수 있습니다. 다만 다음 각 호의 어느 하나에 해당하는 경우에는 청약철회가 제한됩니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>이용자의 책임있는 사유로 재화 등이 멸실 또는 훼손된 경우</li>
            <li>이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우</li>
            <li>시간의 경과에 의하여 재판매가 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우</li>
            <li>복제가 가능한 재화 등의 포장을 훼손한 경우</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제16조 (청약철회의 효과)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 이용자로부터 재화 등을 반환받은 경우 3영업일 이내에 이미 지급받은 재화 등의 대금을 환급합니다. 재화 등의 반환에 필요한 비용은 이용자가 부담하며, 회사는 이용자에게 청약철회를 이유로 위약금 또는 손해배상을 청구하지 않습니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제17조 (개인정보보호)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 이용자의 정보 수집 시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 회사는 수집한 개인정보를 목적 외의 용도로 이용하지 않으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용자에게 동의를 구합니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제18조 (회사의 의무)</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않습니다.</li>
            <li>회사는 이용자가 안전하게 서비스를 이용할 수 있도록 개인정보보호를 위한 보안 시스템을 갖춥니다.</li>
            <li>회사는 이용자가 원하지 않는 영리목적의 광고성 이메일을 발송하지 않습니다.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제19조 (회원의 ID 및 비밀번호에 대한 의무)</h2>
          <p className="text-muted-foreground leading-relaxed">
            ID와 비밀번호에 관한 관리책임은 회원에게 있으며, 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안 됩니다. 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 즉시 회사에 통보해야 합니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제20조 (이용자의 의무)</h2>
          <p className="text-muted-foreground leading-relaxed">
            이용자는 다음 행위를 하여서는 안 됩니다.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>신청 또는 변경 시 허위 내용의 등록</li>
            <li>타인의 정보 도용</li>
            <li>회사에 게시된 정보의 변경</li>
            <li>회사가 정한 정보 이외의 정보 등의 송신 또는 게시</li>
            <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
            <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제21조 (저작권의 귀속 및 이용제한)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다. 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제22조 (분쟁해결)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다. 회사와 이용자 간에 발생한 분쟁은 전자거래기본법에 의해 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">제23조 (재판권 및 준거법)</h2>
          <p className="text-muted-foreground leading-relaxed">
            회사와 이용자 간에 발생한 서비스 이용에 관한 분쟁에 대하여는 대한민국 법을 적용하며, 본 분쟁으로 인한 소는 이용자의 주소지를 관할하는 지방법원의 전속관할로 합니다.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-base font-bold">부칙</h2>
          <p className="text-muted-foreground leading-relaxed">
            이 약관은 2026년 1월 1일부터 적용됩니다.
          </p>
        </article>
      </section>
    </div>
  );
}
