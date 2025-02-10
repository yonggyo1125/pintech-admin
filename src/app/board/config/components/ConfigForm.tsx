import React from 'react'
import styled from 'styled-components'
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md'
import { TableCols } from '@/app/global/components/Tables'
import { Input, Textarea } from '@/app/global/components/FormComponents'
import { BigButton, ButtonGroup } from '@/app/global/components/Buttons'
import Messages from '@/app/global/components/Messages'
import { SubTitle } from '@/app/global/components/StyledTitle'

const StyledForm = styled.form`
  table {
    margin-bottom: 30px;

    th {
      width: 180px;
    }

    &:last-of-type {
      margin-bottom: 30px;
    }
  }
`

const ConfigForm = ({ form, onChange, onClick, actionState }) => {
  const [errors, formAction, isPending] = actionState

  return (
    <StyledForm action={formAction} autoComplete="off">
      <input type="hidden" name="mode" value={form?.mode ?? 'add'} />
      <input type="hidden" name="open" value={form?.open ?? false} />
      <input type="hidden" name="useEditor" value={form?.useEditor ?? false} />
      <input
        type="hidden"
        name="useEditorImage"
        value={form?.useEditorImage ?? false}
      />
      <input
        type="hidden"
        name="useAttachFile"
        value={form?.useAttachFile ?? false}
      />
      <input
        type="hidden"
        name="useComment"
        value={form?.useComment ?? false}
      />
      <input
        type="hidden"
        name="listUnderView"
        value={form?.listUnderView ?? false}
      />
      <input
        type="hidden"
        name="locationAfterWriting"
        value={form?.locationAfterWriting ?? 'list'}
      />
      <input type="hidden" name="skin" value={form?.skin ?? 'default'} />
      <input
        type="hidden"
        name="listAuthority"
        value={form?.listAuthority ?? 'ALL'}
      />
      <input
        type="hidden"
        name="viewAuthority"
        value={form?.viewAuthority ?? 'ALL'}
      />
      <input
        type="hidden"
        name="writeAuthority"
        value={form?.writeAuthority ?? 'ALL'}
      />
      <input
        type="hidden"
        name="commentAuthority"
        value={form?.commentAuthority ?? 'ALL'}
      />

      <SubTitle>기본 설정</SubTitle>
      <TableCols>
        <tbody>
          <tr>
            <th>게시판 ID</th>
            <td>
              {form?.mode === 'edit' ? (
                <>
                  {form?.bid}
                  <input type="hidden" name="bid" value={form?.bid ?? ''} />
                </>
              ) : (
                <>
                  <Input
                    type="text"
                    name="bid"
                    value={form?.bid ?? ''}
                    onChange={onChange}
                  />
                </>
              )}
              <Messages color="danger">{errors?.bid}</Messages>
            </td>
          </tr>
          <tr>
            <th>게시판 이름</th>
            <td>
              <Input
                type="text"
                name="name"
                value={form?.name ?? ''}
                onChange={onChange}
              />
              <Messages color="danger">{errors?.name}</Messages>
            </td>
          </tr>
          <tr>
            <th>사용여부</th>
            <td>
              <span onClick={() => onClick('open', true)}>
                {form?.open ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('open', false)}>
                {form?.open ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>1페이지 게시글 수</th>
            <td>
              <Input
                type="number"
                name="rowsPerPage"
                value={form?.rowsPerPage ?? 20}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <th>페이지 링크수</th>
            <td>
              <Input
                type="number"
                name="pageRanges"
                value={form?.pageRanges ?? 10}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <th>에디터 사용</th>
            <td>
              <span onClick={() => onClick('useEditor', true)}>
                {form?.useEditor ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('useEditor', false)}>
                {form?.useEditor ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>에디터 이미지 첨부</th>
            <td>
              <span onClick={() => onClick('useEditorImage', true)}>
                {form?.useEditorImage ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('useEditorImage', false)}>
                {form?.useEditorImage ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>파일 첨부</th>
            <td>
              <span onClick={() => onClick('useAttachFile', true)}>
                {form?.useAttachFile ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('useAttachFile', false)}>
                {form?.useAttachFile ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>사용여부</th>
            <td>
              <span onClick={() => onClick('useComment', true)}>
                {form?.useComment ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('useComment', false)}>
                {form?.useComment ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>글보기페이지 목록</th>
            <td>
              <span onClick={() => onClick('listUnderView', true)}>
                {form?.listUnderView ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('listUnderView', false)}>
                {form?.listUnderView ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>글작성 후 이동</th>
            <td>
              <span onClick={() => onClick('locationAfterWriting', 'list')}>
                {form?.locationAfterWriting === 'list' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                글 목록
              </span>

              <span onClick={() => onClick('locationAfterWriting', 'view')}>
                {form?.locationAfterWriting === 'view' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                글 보기
              </span>
            </td>
          </tr>
          <tr>
            <th>게시판 스킨</th>
            <td>
              <span onClick={() => onClick('skin', 'default')}>
                {form?.skin === 'default' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                기본(default)
              </span>

              <span onClick={() => onClick('skin', 'gallery')}>
                {form?.skin === 'gallery' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                갤러리(gallery)
              </span>
            </td>
          </tr>
        </tbody>
      </TableCols>

      <SubTitle>게시판 분류</SubTitle>
      <TableCols>
        <tbody>
          <tr>
            <th>분류</th>
            <td>
              <Textarea
                name="category"
                placeholder="분류 여러개는 엔터키를 눌러서 다음칸에 입력"
                height={200}
                value={form?.category ?? ''}
                onChange={onChange}
              ></Textarea>
            </td>
          </tr>
        </tbody>
      </TableCols>

      <SubTitle>게시판 권한</SubTitle>
      <TableCols>
        <tbody>
          <tr>
            <th>글목록 접근 권한</th>
            <td>
              <span onClick={() => onClick('listAuthority', 'ALL')}>
                {form?.listAuthority === 'ALL' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                비회원 + 회원 + 관리자
              </span>
              <span onClick={() => onClick('listAuthority', 'USER')}>
                {form?.listAuthority === 'USER' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                회원 + 관리자
              </span>
              <span onClick={() => onClick('listAuthority', 'ADMIN')}>
                {form?.listAuthority === 'ADMIN' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                관리자
              </span>
            </td>
          </tr>

          <tr>
            <th>글보기 접근 권한</th>
            <td>
              <span onClick={() => onClick('viewAuthority', 'ALL')}>
                {form?.viewAuthority === 'ALL' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                비회원 + 회원 + 관리자
              </span>
              <span onClick={() => onClick('viewAuthority', 'USER')}>
                {form?.viewAuthority === 'USER' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                회원 + 관리자
              </span>
              <span onClick={() => onClick('viewAuthority', 'ADMIN')}>
                {form?.viewAuthority === 'ADMIN' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                관리자
              </span>
            </td>
          </tr>

          <tr>
            <th>글쓰기 권한</th>
            <td>
              <span onClick={() => onClick('writeAuthority', 'ALL')}>
                {form?.writeAuthority === 'ALL' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                비회원 + 회원 + 관리자
              </span>
              <span onClick={() => onClick('writeAuthority', 'USER')}>
                {form?.writeAuthority === 'USER' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                회원 + 관리자
              </span>
              <span onClick={() => onClick('writeAuthority', 'ADMIN')}>
                {form?.writeAuthority === 'ADMIN' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                관리자
              </span>
            </td>
          </tr>

          <tr>
            <th>댓글 작성권한</th>
            <td>
              <span onClick={() => onClick('commentAuthority', 'ALL')}>
                {form?.commentAuthority === 'ALL' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                비회원 + 회원 + 관리자
              </span>
              <span onClick={() => onClick('commentAuthority', 'USER')}>
                {form?.commentAuthority === 'USER' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                회원 + 관리자
              </span>
              <span onClick={() => onClick('commentAuthority', 'ADMIN')}>
                {form?.commentAuthority === 'ADMIN' ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                관리자
              </span>
            </td>
          </tr>
        </tbody>
      </TableCols>

      <ButtonGroup width={450} className="button-group center">
        <BigButton type="reset" color="white" disabled={isPending}>
          다시입력
        </BigButton>
        <BigButton type="submit" color="dark" disabled={isPending}>
          등록하기
        </BigButton>
      </ButtonGroup>
    </StyledForm>
  )
}

export default React.memo(ConfigForm)
