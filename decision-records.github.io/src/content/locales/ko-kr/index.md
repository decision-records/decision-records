# 의사결정 기록(DR)

의사결정 기록(DR)은 중요한 선택을 그 배경과 결과와 함께 시작하고, 논의하고, 보관하는 방법입니다.

목차:

- [의사결정 기록이란 무엇인가요?](#의사결정-기록이란-무엇인가요)
- [의사결정 기록 템플릿](#의사결정-기록-템플릿)
- [의사결정 기록을 시작하는 방법](#의사결정-기록을-시작하는-방법)
- [의사결정 기록이 단순한 메모보다 나은 이유는 무엇인가요?](#의사결정-기록이-단순한-메모보다-나은-이유는-무엇인가요)
- [도구와 함께 의사결정 기록을 시작하는 방법](#도구와-함께-의사결정-기록을-시작하는-방법)
- [AI 스킬](#ai-스킬)
- [좋은 의사결정 기록을 작성하기 위한 제안](#좋은-의사결정-기록을-작성하기-위한-제안)
- [의사결정 기록을 위한 팀워크 조언](#의사결정-기록을-위한-팀워크-조언)
- [의사결정 기록을 위한 팀워크 질문](#의사결정-기록을-위한-팀워크-질문)
- [더 알아보기](#더-알아보기)

이 저장소에 있는 것:

- [가이드](가이드) - 의사결정 기록이 무엇인지, 사람들이 왜 사용하는지, 수명 주기, 거버넌스 등.
- [템플릿](템플릿) - 마크다운 서식과 단계별 제안이 담긴, 복사해서 붙여 넣는 템플릿.
- [튜토리얼](튜토리얼) - 직접 따라 하는 단계별 안내: 20분 안에 첫 의사결정 기록을 작성합니다.
- [예시](예시) - 전략, 영업, 마케팅, 제품, 인사, 리스크, 프로젝트, 기술 분야의 의사결정을 위한 출발점 예시(완결된 결정이 아닌 작업 중인 문서).
- [체크리스트](체크리스트): 작성할지 판단하고, 잘 쓰고, 검토하고, 조직 전체에서 운영하기 위한 체크리스트.
- [도움말](도움말) — 도입을 고려하는 리더들이 자주 제기하는 질문을 위한 FAQ, 문제 해결, 용어집.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — 이 저장소의 명세: 구조, 콘텐츠, 로케일, 웹사이트, 에이전트.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — 로케일마다 하나의 디렉터리로 구성된 콘텐츠이며, `en-us`가 영어 원본(단일 기준)입니다.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — 이 저장소의 템플릿과 체크리스트를 AI 어시스턴트 안에서 적용하는 Claude Skills: 하나는 의사결정 기록 작성용, 다른 하나는 이 저장소 유지보수용입니다.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — 위의 스킬을 소개하는 [decision-records.github.io](https://decision-records.github.io)의 SvelteKit 3 소스입니다.

## 의사결정 기록이란 무엇인가요?

**의사결정 기록**(DR)은 중요한 선택을 그 배경과 결과와 함께 시작하고, 논의하고, 보관하는 방법입니다.

**의사결정 로그**(DL)는 특정 프로젝트(또는 조직)를 위해 만들고 유지하는 모든 DR의 모음입니다.

이 맥락에서 **결정**은 중요한 요구 사항을 다루는 조직의 선택입니다.

**중요한 요구 사항**(SR)은 프로젝트 시스템에 측정 가능한 영향을 미치는 프로젝트의 필요입니다.

이 모든 용어는 **지식 관리**(KM)라는 주제에 속합니다.

이 문서의 목적은 의사결정 기록을 빠르게 훑어볼 수 있도록 하는 것입니다.

## 의사결정 기록은 조직의 일하는 방식입니다

되돌리기 어렵거나, 다른 사람에게 영향을 주거나, 나중에 의문이 제기될 선택이라면 의사결정 기록을 남길 가치가 있습니다.

- 전략: 시장 진출 또는 철수, 성장 대 수익성 기조 선택, 3년짜리 베팅 설정
- 영업: 영업 지역 모델 변경, CRM 선정, 보상 체계 개편
- 마케팅: 브랜드 재포지셔닝, 채널 믹스 선택, 대행사 대 내부 조직 모델 선택
- 제품: 가격 모델 설정, 직접 개발 대 구매 선택, 기능 또는 제품 라인 종료
- 재무: 자금 조달 구조 선택, 자본 배분 정책 설정
- 인사: 원격근무 정책 설정, 직급 체계와 보상 구간 재설계
- 리스크 및 법무: 특정 리스크의 수용·완화·이전 결정, 공급업체 집중 한도 선택
- 운영: 직접 개발 대 구매, 내재화 대 외주, 수행 방법론 선택
- 홍보: 위기 커뮤니케이션 기조 선택, 미디어 대응 정책 설정
- 전문성 개발: 승진 또는 교육 투자 정책 설정
- 기술: 클라우드 공급자, 데이터베이스, 통합 패턴, 소프트웨어 방법론 선택

1년 뒤에 팀원이 "잠깐, 우리가 왜 이렇게 했지?"라고 묻는 모습이 상상된다면, 그 결정은 의사결정 기록의 후보입니다.

## 의사결정 기록 템플릿

다음 주요 섹션을 사용하는 [템플릿](템플릿/index.md) 파일을 참고하세요.

- **제목**: 50자 이내의 짧은 현재형 명령문.

- **상태**: 의견 요청 | 제안됨 | 승인됨 | 거부됨 | 더 이상 권장하지 않음 | 대체됨

- **이슈**: 다루려는 이슈를 설명하고, 왜 필요한지에 대한 의문이 남지 않도록 합니다.

- **가정**: 가정, 전제, 프로젝트 간 요구 사항 등을 설명합니다.

- **제약**: 이 결정이 환경에 초래할 수 있는 제약을 기록합니다.

- **선택지**: 가능한 후보 옵션을 의견이 아닌 사실과 데이터로 나열합니다.

- **의견**: 팀과 이해관계자의 의견, 그리고 외부 자문가와 검토자의 의견.

- **선택**: 목적과 책임을 담아 왜 그 선택지를 골랐는지 설명합니다.

- **영향**: 변경이 필요한 사항 등 결정의 영향을 적습니다.

- **관련 항목**: 참고 자료, 프로젝트 간 작업, 후속 필요 사항 등.

## 의사결정 기록을 시작하는 방법

의사결정 기록을 시작하려면 다음 영역에 대해 팀원들과 이야기해 보세요.

결정 식별:

- 결정이 얼마나 긴급하고 얼마나 중요한가?

- 지금 내려야 하는가, 아니면 더 많은 것이 알려질 때까지 기다릴 수 있는가?

- 개인과 집단의 경험은 물론 검증된 설계 방법과 관행도 결정을 식별하는 데 도움이 됩니다.

- 가능하면 제품 할 일 목록을 보완하는 결정 할 일 목록을 유지하세요.

결정 내리기:

- 대화 매핑(dialogue mapping)처럼 일반적인 기법과 소프트웨어 특화 기법 등 여러 의사결정 기법이 있습니다.

- 집단 의사결정은 활발한 연구 주제입니다.

결정의 시행과 집행:

- 결정은 시스템에 자금을 대고, 개발하고, 운영하는 이해관계자에게 전달되고 그들의 동의를 얻어야 합니다.

- 아키텍처가 드러나는 코딩 스타일과 아키텍처 관심사 및 결정에 초점을 맞춘 코드 리뷰는 관련된 두 가지 관행입니다.

- 시스템을 발전시키거나, 업그레이드하거나, 달라진 요구 사항에 맞게 조정하는 것과 같은 중대한 변경이 있을 때 결정을 재검토할 수 있습니다.

결정 공유(선택 사항):

- 많은 결정이 프로젝트 전반에서 반복됩니다.

- 따라서 명시적인 지식 관리 전략을 사용할 때 좋든 나쁘든 과거 결정의 경험은 재사용 가능한 귀중한 자산이 될 수 있습니다.

- 집단 의사결정은 활발한 연구 주제입니다.

결정 문서화:

- 결정 계획과 결정 기록을 위한 많은 템플릿과 도구가 있습니다.

- 애자일 커뮤니티를 참고하세요. 예: M. Nygard의 아키텍처 의사결정 기록.

- 전통적인 소프트웨어 공학 및 아키텍처 설계 프로세스를 참고하세요. 예: IBM UMF와 CapitalOne의 Tyree와 Akerman이 제안한 표 레이아웃.

결정 가이드:

- 위의 단계는 위키백과의 [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision) 항목에서 가져왔습니다.

- 일반적인 기법과 소프트웨어 및 소프트웨어 아키텍처 특화 기법 등 여러 의사결정 기법이 있습니다. 예: 대화 매핑.

## 의사결정 기록이 단순한 메모보다 나은 이유는 무엇인가요?

의사결정 기록은 자유 형식의 메모에 구조를 더해 줍니다.

의사결정 기록 템플릿은 다뤄야 할 항목 목록을 더해 주며, 이는 체크리스트로 기능합니다.

중요한 결과는 팀이 의사결정 기록과 템플릿으로 팀워크를 개선할 수 있다는 점입니다. 의사결정 기록과 템플릿은 모두 체크리스트로 작동하여 팀이 빠뜨린 부분 없이 다루고 있는지 확인하고 효율적이고 효과적으로 소통하도록 돕습니다.

의사결정 기록의 장점은 팀 규모, 프로젝트 확장, 통합 기회, 이해관계자 참여, 장기 유지보수, 시간에 따른 진화에 따라 커지는 경향이 있습니다.

예를 들어 저희는 대규모 팀, 여러 부서, 여러 파트너 조직, 수년 규모의 프로젝트, 수백만 달러 예산에서 의사결정 기록을 사용합니다. 이 정도 규모와 범위에서는 자유 형식의 메모보다 어느 정도 구조화된 소통을 선호합니다.

실무에서는 의사결정 기록이 원격 팀원의 참여를 늘리고, 비동기 소통을 늘리고, 옵션을 더 효율적으로 평가하게 하고, 앞으로의 요약을 더 늘려 주기 때문에 좋아합니다. 이러한 측면은 결정이 명확하고, 완전하고, 간결하고, 기록되어 있으므로 새 팀원의 온보딩에도 도움이 됩니다.

## 도구와 함께 의사결정 기록을 시작하는 방법

원하는 어떤 방식으로든 도구와 함께 의사결정 기록을 시작할 수 있습니다.

예를 들어:

- Google Drive와 Google Docs를 좋아한다면 `decisions` 폴더를 만들고 의사결정 기록마다 문서 하나를 만드세요.

- 소스 코드 버전 관리를 좋아한다면 `decisions` 디렉터리를 만들고 의사결정 기록마다 텍스트 파일 하나를 만드세요.

- Atlassian Jira 같은 프로젝트 계획 도구를 좋아한다면 해당 도구의 계획 트래커를 사용하세요.

- MediaWiki 같은 위키를 좋아한다면 의사결정 기록 위키를 만들고 의사결정 기록마다 위키 페이지 하나를 만드세요.

## AI 스킬

[Claude Code](https://claude.com/claude-code) 또는 [Claude Skills](https://code.claude.com/docs/en/skills)를 지원하는 다른 에이전트를 사용한다면, 이 저장소는 [skills](https://github.com/decision-records/decision-records/tree/main/skills)에 두 가지 AI 스킬을 제공합니다.

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — 의사결정 기록을 작성하는 모든 사람을 위한 스킬입니다. 선택에 기록이 필요한지 판단하기, 경량 또는 종합 템플릿 고르기, 작성하기, 보관하기, 게시 전 체크리스트까지 안내합니다.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — 이 저장소 자체의 유지보수자를 위한 스킬입니다. 실제 사례 추가, 예시 인덱스와 상호 참조의 일관성 유지, 이 저장소의 파일 규칙을 다룹니다.

스킬을 사용하려면 이 저장소를 복제하고, 원하는 스킬 폴더를 에이전트가 프로젝트 스킬을 불러오는 위치(Claude Code의 경우 보통 자신의 프로젝트에 있는 `.claude/skills/<name>`)에 복사한 다음, 어시스턴트에게 사용하라고 요청하세요. 자세한 내용은 [decision-records.github.io/skills](https://decision-records.github.io/skills/)를, 해당 페이지의 소스는 [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io)를 참고하세요.

## 좋은 의사결정 기록을 작성하기 위한 제안

좋은 의사결정 기록의 특징:

- 시점 - 결정이 내려진 때를 밝힙니다.

- 합리성 - 특정 결정을 내린 이유를 설명합니다.

- 불변 기록 - 이전에 게시된 의사결정 기록에 담긴 결정은 변경하지 않습니다.

- 구체성 - 의사결정 기록 하나는 하나의 결정만 다룹니다.

의사결정 기록에서 좋은 배경의 특징:

- 조직의 상황과 비즈니스 우선순위를 설명합니다.

- 팀의 사회적 구성과 역량 구성에 기반한 근거와 고려 사항을 포함합니다.

의사결정 기록에서 좋은 결과의 특징:

- 올바른 접근 - "Y 대신 X를 시작해야 합니다"

- 잘못된 접근 - 특정 AD를 내린 데 대한 "장점"과 "단점"으로 결정을 설명하지 않습니다.

새 의사결정 기록이 이전 의사결정 기록을 대체할 수 있습니다.

- 이전 의사결정 기록을 대체하거나 무효화하는 결정이 내려지면 새 결정을 만들고 이전 결정을 참조합니다.

## 의사결정 기록을 위한 팀워크 조언

팀과 함께 의사결정 기록을 사용해 볼 생각이라면, 여러 팀과 일하며 얻은 조언을 소개합니다.

"무엇"을 강제하기보다 "왜"를 함께 이야기하면서 팀원들을 이끌 기회가 있습니다. 예를 들어 의사결정 기록은 팀이 더 똑똑하게 생각하고 더 잘 소통하기 위한 방법입니다. 사후에 억지로 요구되는 서류 작업에 그친다면 가치가 없습니다.

일부 팀은 "의사결정 기록"이라는 약어보다 "결정"이라는 이름을 훨씬 선호합니다. 일부 팀이 "decisions"라는 디렉터리 이름을 쓰면 전구가 켜진 것처럼 팀이 공급업체 결정, 계획 결정, 일정 결정 등 더 많은 정보를 그 디렉터리에 담기 시작합니다. 이 모든 종류의 정보에 같은 템플릿을 쓸 수 있습니다. 저희는 사람들이 약어("의사결정 기록")보다 단어("결정")로 더 빨리 배우고, "기록"이라는 단어가 빠지면 작업 중인 문서를 더 적극적으로 쓰게 되며, 일부 개발자와 관리자는 "아키텍처"라는 단어를 싫어한다고 가정합니다.

이론적으로는 불변성이 이상적입니다. 실무에서는 가변성이 저희 팀에 더 잘 맞았습니다. 날짜 표시와 함께 결정 이후에 도착한 정보라는 메모를 달아 새 정보를 기존 의사결정 기록에 삽입합니다. 이런 접근은 모두가 갱신할 수 있는 "살아 있는 문서"로 이어집니다. 일반적인 갱신 사례는 새 팀원, 새 제품, 사용에서 얻은 실제 결과 덕분에 정보를 얻을 때, 또는 공급업체의 기능, 요금제, 라이선스 계약 등 사후에 발생한 제3자의 변경이 있을 때입니다.

## 의사결정 기록을 위한 팀워크 질문

### 누가 의사결정 기록을 만들 수 있나요?

특정 사람, 특정 역할, 특정 팀, 특정 부서와 같은 영역을 고려하세요. 또한 의사결정 기록을 위임, 즉 다른 사람이 작성할 기록을 요청할 수 있는 사람, 역할, 팀, 부서가 있는지도 고려하세요.

예시 답변: 아키텍처 의사결정 기록 README 페이지를 읽은 우리 조직의 누구나 의사결정 기록을 제안할 수 있습니다. 즉, 작성을 시작하고 팀과 공유할 수 있습니다.

### 어떤 경우에 의사결정 기록을 작성해야 하나요?

조직의 팀 업무 방식, 소프트웨어 시스템 구조, 팀 간 조율, 장기 유지보수성, 외부 인터페이스, 누구에게 혜택을 주고 싶은지 등의 영역을 고려하세요.

예시 답변: 미래의 개발자가 우리가 하는 일의 "이유"를 이해하기를 바랄 때 의사결정 기록을 만들고자 합니다.

### 어떤 경우에 의사결정 기록을 작성하지 않아도 되나요?

아키텍처와 무관한 결정, 위험이 최소이거나 독립적이거나 개발자 한 명에 국한되는 등 사소한 결정, 표준이나 정책이나 문서로 이미 충분히 다뤄진 결정, 우회책이나 개념 증명이나 실험처럼 임시적인 결정과 같은 영역을 고려하세요.

예시 답변: 결정의 범위, 기간, 위험, 비용이 제한적이거나 다른 곳에서 이미 다뤄진 경우에는 의사결정 기록을 건너뛰고자 합니다.

### 의사결정 기록의 수명 주기는 어떻게 되나요?

생성 과정, 조사 과정, 의사결정 과정, 구현 과정, 종료 과정과 같은 영역을 고려하세요. 의사결정 기록의 수명 주기를 시간에 따라 어떻게 추적할지, 예를 들어 한 상태에서 다음 상태로 어떻게 옮기고 이를 이해관계자에게 어떻게 알릴지도 고려하세요.

예시 답변: 의사결정 기록은 시작 → 조사 → 평가 → 구현 → 유지 → 종료의 수명 주기 단계를 거치기를 원합니다.

### 의사결정 기록의 수명 주기 단계에 대한 기준은 무엇인가요?

의사결정 기록의 승인 기준, 즉 한 수명 주기 단계에서 다음 단계로 넘어가기에 충분히 좋은지 어떻게 알 수 있는가와 같은 영역을 고려하세요. 문제가 명확하게 설명되었는가? 대안이 검토되었는가? 상충 관계가 충분히 이해되고 문서화되었는가?
관련된 모든 배경이 갖춰졌는가? 관련된 모든 이해관계자가 참여했는가? 모든 피드백이 반영되었는가?

예시 답변: 활동 중인 팀이 1) 조사를 마치고, 2) 평가를 마치고, 3) 의견 요청과 1주일의 기한을 달아 의사결정 기록 제안을 이해관계자에게 게시하고, 4) 모든 이해관계자의 의견을 반영하고 처리했을 때 이해관계자가 의사결정 기록에 투표하기를 원합니다.

### 어떤 역할과 책임이 의사결정 기록과 상호작용하나요?

제안자, 조사자, 평가자, 검토자, 승인자, 유지보수자 등의 역할을 고려하세요. 이해관계자와의 소통, 기대 충족 보장, 웹사이트나 인트라넷 공유, 주기적으로 그리고 특히 관련 변경이 생길 때 작업 검토와 같은 책임을 고려하세요.

예시 답변: 모든 의사결정 기록에는 항상 주 담당자, 부 담당자, 책임 팀이 있기를 원합니다. 이들은 소통, 게시, 유지보수, 최소 연 1회의 주기적 검토, 필요 시 최종 종료를 책임집니다.

### 거버넌스는 의사결정 기록과 어떻게 상호작용하나요?

조직의 업무 방식, 법무나 인사 측면 등 특별한 규정 준수 요구, 합의 대 갈등 대 에스컬레이션을 어떻게 다룰지와 같은 영역을 고려하세요. 의사결정 기록에 대해 승인, 투표, 거부권 행사 등 다른 곳보다 더 큰 영향력을 가질 수 있는 영역, 사람, 팀이 있나요?

예시 답변: 의사결정 기록의 거버넌스는 CEO, CTO, CLO, 의사결정 기록을 구현하는 팀, 팀에서 해당 AD를 가장 잘 아는 전문가의 우선순위로 이루어집니다. 의사결정 기록에 명시되지 않은 한 다른 누구도 거버넌스 권한이 없습니다.

### 어떤 원칙이 의사결정 기록과 상호작용하나요?

빠르게 움직일지 천천히 움직일지, 결정 합의 대 결정 갈등, 위험 선호 대 안전 선호, 공개 논의 대 비공개 논의 등을 포함하는 조직의 업무 방식과 같은 영역을 고려하세요.

예시 답변: 행동 우선, 반대하되 따르기(disagree-and-commit), 쉽게 되돌리고 쉽게 격리할 수 있는 결정에는 70% 추정이면 충분하다는 리더십 원칙, 그리고 조직의 기밀 유지 계약에 명시된 기밀 정보를 제외한 공개적인 업무 방식을 사용합니다.

## 더 알아보기

소개:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

템플릿:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

심층 자료:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - 매월 무료로 제공되는 소프트웨어 아키텍처 강의

도구:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

기업별 가이드:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

예시:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

동영상:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

팟캐스트:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

도서:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

함께 보기:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM의 e-Business Reference Architecture Framework
